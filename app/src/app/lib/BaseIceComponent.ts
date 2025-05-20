import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentInstance } from '@craftercms/models';
import { from, forkJoin } from 'rxjs';
import {
  fetchIsAuthoring,
  getICEAttributes,
  initExperienceBuilder}  from '@craftercms/experience-builder';
import { getModelByUrl } from './api';
import { environment } from '../../environments/environment';
import { ExperienceBuilderProps } from '@craftercms/experience-builder/react';

@Component({
  template: ''
})

export class BaseIceComponent implements OnInit {
  public model: ContentInstance;
  public baseUrl: string = environment.PUBLIC_CRAFTERCMS_HOST_NAME ?? '';
  path: string = '';
  private _isAuthoring: boolean = false;

  constructor(router: Router) {
    this.path = router.url;
    this.model = {
      craftercms: {
        id: '',
        path: '',
        label: '',
        dateCreated: '',
        dateModified: '',
        contentTypeId: '',
        disabled: false,
      }
    };
  }

  ngOnInit(): void {
    forkJoin({
      isAuthoring: from(fetchIsAuthoring()),
      model: getModelByUrl(this.path),
    }).subscribe(({ isAuthoring, model }) => {
      this._isAuthoring = isAuthoring;
      this.model = model instanceof Array ? model[0] : model;
      if (isAuthoring && this.model && this.model.craftercms) {
        initExperienceBuilder({
          path: this.model.craftercms.path || "",
        } as ExperienceBuilderProps);
      }
    });
  }

  getIce(params: any) {
    const { model, index, fieldId } = params;
    return getICEAttributes({
      model,
      fieldId,
      index,
      isAuthoring: this._isAuthoring
    });
  }
}