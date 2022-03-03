import { Injectable } from '@nestjs/common';

@Injectable()
export class BreedService {
    private base = {
        meta: {
          timestamp: '1646323346',
          items_page: '1',
          items_page_total: '83',
          items_page_size: '10',
          items_total: '827',
          transaction_id: '8005d3db0576d0468a090c5379ae5433790ee1c835e68a7f393d633745f9e794'
        },
        items: [
          {
            breed: {
              id: '1',
              active: '1',
              created_at: '',
              modified_at: '',
              name: 'Abruzzenhumk',
              species_id: '1'
            }
          },
          {
            breed: {
              id: '2',
              active: '1',
              created_at: '',
              modified_at: '',
              name: 'American Water Spaniel',
              species_id: '1'
            }
          },
          {
            breed: {
              id: '3',
              active: '1',
              created_at: '',
              modified_at: '',
              name: 'Affenpinscher',
              species_id: '1'
            }
          },
          {
            breed: {
              id: '4',
              active: '1',
              created_at: '',
              modified_at: '',
              name: 'Afghan Hound',
              species_id: '1'
            }
          },
          {
            breed: {
              id: '5',
              active: '1',
              created_at: '',
              modified_at: '',
              name: 'Airedale Terrier',
              species_id: '1'
            }
          },
          {
            breed: {
              id: '6',
              active: '1',
              created_at: '',
              modified_at: '',
              name: 'Akita Inu',
              species_id: '1'
            }
          },
          {
            breed: {
              id: '7',
              active: '1',
              created_at: '',
              modified_at: '',
              name: 'Alangu Mastiff',
              species_id: '1'
            }
          },
          {
            breed: {
              id: '8',
              active: '1',
              created_at: '',
              modified_at: '',
              name: 'Alano Español',
              species_id: '1'
            }
          },
          {
            breed: {
              id: '9',
              active: '1',
              created_at: '',
              modified_at: '',
              name: 'Alapaha Blue Blood Bulldog',
              species_id: '1'
            }
          },
          {
            breed: {
              id: '10',
              active: '1',
              created_at: '',
              modified_at: '',
              name: 'Alaskan Husky',
              species_id: '1'
            }
          }
        ],
        messages: []
    };

    success() {
        return this.base;
    }
}