import { Injectable } from '@nestjs/common';

@Injectable()
export class AppointmentTypeListService {
    private base = {
        meta: {
          timestamp: '1646256358',
          items_page: '1',
          items_page_total: '3',
          items_page_size: '10',
          items_total: '25',
          transaction_id: 'aff03baea094daf1ea1c771e5c317bed615b8f24c3c1d3b11fde3d84f2afd26b'
        },
        items: [
          {
            appointmenttype: {
              id: '1',
              active: '1',
              created_at: '',
              modified_at: '1625610988',
              name: 'Clinical',
              default_duration: 30
            }
          },
          {
            appointmenttype: {
              id: '2',
              active: '1',
              created_at: '',
              modified_at: '',
              name: 'Meeting',
              default_duration: 30
            }
          },
          {
            appointmenttype: {
              id: '4',
              active: '1',
              created_at: '',
              modified_at: '',
              name: 'Training',
              default_duration: 30
            }
          },
          {
            appointmenttype: {
              id: '7',
              active: '1',
              created_at: '',
              modified_at: '',
              name: 'Surgery',
              default_duration: 30
            }
          },
          {
            appointmenttype: {
              id: '8',
              active: '1',
              created_at: '',
              modified_at: '',
              name: 'New Referral',
              default_duration: 30
            }
          },
          {
            appointmenttype: {
              id: '9',
              active: '1',
              created_at: '',
              modified_at: '',
              name: 'Follow Up',
              default_duration: 30
            }
          },
          {
            appointmenttype: {
              id: '15',
              active: '1',
              created_at: '',
              modified_at: '',
              name: 'Grooming',
              default_duration: 30
            }
          },
          {
            appointmenttype: {
              id: '17',
              active: '1',
              created_at: '',
              modified_at: '1532020689',
              name: 'New Client/Animal',
              default_duration: 30
            }
          },
          {
            appointmenttype: {
              id: '18',
              active: '1',
              created_at: '1532020763',
              modified_at: '1532020763',
              name: 'Test Type',
              default_duration: 30
            }
          },
          {
            appointmenttype: {
              id: '19',
              active: '0',
              created_at: '1574505278',
              modified_at: '1574505288',
              name: 'test',
              default_duration: 0
            }
          }
        ],
        messages: []
    };

    success() {
        return this.base;
    }
}