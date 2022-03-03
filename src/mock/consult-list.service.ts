import { Injectable } from '@nestjs/common';

@Injectable()
export class ConsulListService {
    private base = {
        meta: {
          timestamp: '1646256799',
          items_page: '1',
          items_page_total: '133',
          items_page_size: '10',
          items_total: '1322',
          transaction_id: '05756572934018713a362264ec07e42e12b24e83d4d875ab6475504368e9d9f9'
        },
        items: [
          {
            consult: {
              id: '1',
              active: '1',
              created_at: '1366375054',
              modified_at: '1584703158',
              code: '300001',
              date: '1366375054',
              animal_id: '1',
              vet_id: '0',
              referring_vet_contact_id: '',
              referring_clinic_id: '',
              description: 'Vaccination',
              presenting_problem_link_list: [],
              ownership_id: '1'
            }
          },
          {
            consult: {
              id: '2',
              active: '1',
              created_at: '1493159154',
              modified_at: '1584703158',
              code: '300002',
              date: '1493159131',
              animal_id: '2',
              vet_id: '0',
              referring_vet_contact_id: '',
              referring_clinic_id: '',
              description: 'Testing New medical Records',
              presenting_problem_link_list: [
                '1'
              ],
              ownership_id: '1'
            }
          },
          {
            consult: {
              id: '3',
              active: '1',
              created_at: '1493159166',
              modified_at: '1584703158',
              code: '300003',
              date: '1493159163',
              animal_id: '2',
              vet_id: '0',
              referring_vet_contact_id: '',
              referring_clinic_id: '',
              description: '',
              presenting_problem_link_list: [],
              ownership_id: '1'
            }
          },
          {
            consult: {
              id: '4',
              active: '1',
              created_at: '1493159439',
              modified_at: '1584703158',
              code: '300004',
              date: '1493159428',
              animal_id: '2',
              vet_id: '0',
              referring_vet_contact_id: '',
              referring_clinic_id: '',
              description: 'SOAP SDoes nasas\r\naasadadasdadaa',
              presenting_problem_link_list: [],
              ownership_id: '1'
            }
          },
          {
            consult: {
              id: '5',
              active: '1',
              created_at: '1493159526',
              modified_at: '1584703158',
              code: '300005',
              date: '1493159496',
              animal_id: '2',
              vet_id: '0',
              referring_vet_contact_id: '',
              referring_clinic_id: '',
              description: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              presenting_problem_link_list: [
                '2'
              ],
              ownership_id: '1'
            }
          },
          {
            consult: {
              id: '6',
              active: '1',
              created_at: '1493159819',
              modified_at: '1584703158',
              code: '300006',
              date: '1493159765',
              animal_id: '2',
              vet_id: '0',
              referring_vet_contact_id: '',
              referring_clinic_id: '',
              description: '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
              presenting_problem_link_list: [],
              ownership_id: '1'
            }
          },
          {
            consult: {
              id: '7',
              active: '1',
              created_at: '1493160030',
              modified_at: '1584703158',
              code: '300007',
              date: '1493160024',
              animal_id: '2',
              vet_id: '0',
              referring_vet_contact_id: '',
              referring_clinic_id: '',
              description: '111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
              presenting_problem_link_list: [],
              ownership_id: '1'
            }
          },
          {
            consult: {
              id: '8',
              active: '1',
              created_at: '1493160467',
              modified_at: '1584703158',
              code: '300008',
              date: '1492869600',
              animal_id: '2',
              vet_id: '0',
              referring_vet_contact_id: '32',
              referring_clinic_id: '',
              description: 'Test',
              presenting_problem_link_list: [],
              ownership_id: '1'
            }
          },
          {
            consult: {
              id: "327",
              active: "1",
              created_at: "1569879117",
              modified_at: "1584570786",
              code: "300327",
              date: "1569438000",
              animal_id: "5",
              vet_id: "0",
              referring_vet_contact_id: "",
              referring_clinic_id: "",
              description: "",
              presenting_problem_link_list: [],
              ownership_id: "2"
            }
          },
          {
            consult: {
              id: "400",
              active: "1",
              created_at: "1574697745",
              modified_at: "1575289749",
              code: "300400",
              date: "1574677800",
              animal_id: "5",
              vet_id: "88",
              referring_vet_contact_id: "",
              referring_clinic_id: "",
              description: "",
              presenting_problem_link_list: [],
              ownership_id: "2"
            }
          },
          {
            consult: {
              id: "1307",
              active: "1",
              created_at: "1641939434",
              modified_at: "1641939434",
              code: "301307",
              date: "1641956400",
              animal_id: "5",
              vet_id: "563",
              referring_vet_contact_id: "",
              referring_clinic_id: "",
              description: "",
              presenting_problem_link_list: [],
              ownership_id: "2"
            }
          },
          {
            consult: {
              id: '9',
              active: '1',
              created_at: '1498605915',
              modified_at: '1584703158',
              code: '300009',
              date: '1498605841',
              animal_id: '6',
              vet_id: '31',
              referring_vet_contact_id: '24',
              referring_clinic_id: '',
              description: 'Test',
              presenting_problem_link_list: [
                '3',
                '4'
              ],
              ownership_id: '1'
            }
          },
          {
            consult: {
              id: '10',
              active: '1',
              created_at: '1507617432',
              modified_at: '1584703159',
              code: '300010',
              date: '1507617406',
              animal_id: '8',
              vet_id: '31',
              referring_vet_contact_id: '34',
              referring_clinic_id: '34',
              description: '',
              presenting_problem_link_list: [],
              ownership_id: '1'
            }
          }
        ],
        messages: []
    };

    success(animalId?: string) {

        if (+animalId || +animalId === 0) {
            const itemsFiltered = this.base.items.filter((item: any) => {
                return item.consult.animal_id === animalId;
            });

            return {
                ...this.base,
                items: itemsFiltered
            }
        }
        return this.base;
    }
}