import { LikeWidgetModule } from './like-widget.module';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { UniqueIdService } from "../../services/unique-id/unique-id.service";
import { LikeWidgetComponent } from "./like-widget.component";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule]
    }).compileComponents()

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    expect(component).toBeTruthy()
  });

  it('Should auto generate ID when id input property is missing', () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  })

  it('Should not generate ID when id input property is present', () => {
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  })

})
