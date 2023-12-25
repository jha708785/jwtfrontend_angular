import { TestBed } from '@angular/core/testing';

import { RecipeserviceService } from './recipeservice.service';

describe('RecipeserviceService', () => {
  let service: RecipeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
