import {inject} from '@angular/core'
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router'
import { RideService } from '../ride.service'
// import { EventService } from '../event.service'

 
export const eventRouteActivator: CanActivateFn = (route,state) =>
{
const eventService = inject(RideService)
const router = inject(Router)
const eventExists = !!eventService.getVehcileById(+route.params['id'])
 
if(!eventExists)
  router.navigate(['/404'])
 
  return eventExists
 
}