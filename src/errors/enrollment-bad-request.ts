import { ApplicationError } from '@/protocols';

export function EnrollmentBadrequests(): ApplicationError {
  return {
    name: 'EnrollmentBadrequests',
    message: 'User is not enrolled in the event.',
  };
}


