import { Injectable } from '@nestjs/common';

@Injectable()
export class PrescriptionService {
    private basePrescriptions = {
        meta: {
          timestamp: '1646319438',
          items_page: '1',
          items_page_total: '20',
          items_page_size: '10',
          items_total: '198',
          transaction_id: 'd063572685af735ebff3b11969ba56ad8f11811740ed30ca8f87a51482666527'
        },
        items: [
          {
            prescription: {
              id: '1',
              active: '1',
              created_at: '1494968930',
              modified_at: '1494968930',
              animal_id: '2',
              consult_id: '8',
              prescribing_vet_user_id: '31',
              date_of_prescription: '1494968866',
              prescription_item_list: [
                '1'
              ],
              sales_resource_id: '17',
              is_rvm: '0',
              rvm_notes: '',
              rvm_consult_fee_id: '',
              rvm_type_id: '',
              contact_id: '5'
            }
          },
          {
            prescription: {
              id: '2',
              active: '1',
              created_at: '1502829051',
              modified_at: '1502829051',
              animal_id: '2',
              consult_id: '6',
              prescribing_vet_user_id: '31',
              date_of_prescription: '1502828994',
              prescription_item_list: [
                '2',
                '3'
              ],
              sales_resource_id: '17',
              is_rvm: '0',
              rvm_notes: '',
              rvm_consult_fee_id: '',
              rvm_type_id: '',
              contact_id: '5'
            }
          },
          {
            prescription: {
              id: '3',
              active: '1',
              created_at: '1513790810',
              modified_at: '1515170471',
              animal_id: '18',
              consult_id: '',
              prescribing_vet_user_id: '55',
              date_of_prescription: '1513790743',
              prescription_item_list: [
                '4'
              ],
              sales_resource_id: '66',
              is_rvm: '0',
              rvm_notes: '',
              rvm_consult_fee_id: '',
              rvm_type_id: '',
              contact_id: '28'
            }
          },
          {
            prescription: {
              id: '4',
              active: '1',
              created_at: '1513796201',
              modified_at: '1513796201',
              animal_id: '18',
              consult_id: '',
              prescribing_vet_user_id: '55',
              date_of_prescription: '1513791000',
              prescription_item_list: [],
              sales_resource_id: '66',
              is_rvm: '0',
              rvm_notes: '',
              rvm_consult_fee_id: '',
              rvm_type_id: '',
              contact_id: '28'
            }
          },
          {
            prescription: {
              id: '5',
              active: '1',
              created_at: '1513796441',
              modified_at: '1513796441',
              animal_id: '2',
              consult_id: '',
              prescribing_vet_user_id: '55',
              date_of_prescription: '1513796316',
              prescription_item_list: [
                '6',
                '7'
              ],
              sales_resource_id: '66',
              is_rvm: '0',
              rvm_notes: '',
              rvm_consult_fee_id: '',
              rvm_type_id: '',
              contact_id: '11'
            }
          },
          {
            prescription: {
              id: '6',
              active: '1',
              created_at: '1515166604',
              modified_at: '1515166604',
              animal_id: '17',
              consult_id: '',
              prescribing_vet_user_id: '55',
              date_of_prescription: '1515166500',
              prescription_item_list: [
                '8'
              ],
              sales_resource_id: '64',
              is_rvm: '0',
              rvm_notes: '',
              rvm_consult_fee_id: '',
              rvm_type_id: '',
              contact_id: '54'
            }
          },
          {
            prescription: {
              id: '7',
              active: '1',
              created_at: '1515170631',
              modified_at: '1515170672',
              animal_id: '18',
              consult_id: '',
              prescribing_vet_user_id: '55',
              date_of_prescription: '1515170509',
              prescription_item_list: [],
              sales_resource_id: '64',
              is_rvm: '0',
              rvm_notes: '',
              rvm_consult_fee_id: '',
              rvm_type_id: '',
              contact_id: '28'
            }
          },
          {
            prescription: {
              id: '8',
              active: '1',
              created_at: '1515707211',
              modified_at: '1515769782',
              animal_id: '17',
              consult_id: '',
              prescribing_vet_user_id: '55',
              date_of_prescription: '1515707147',
              prescription_item_list: [
                '12'
              ],
              sales_resource_id: '64',
              is_rvm: '0',
              rvm_notes: '',
              rvm_consult_fee_id: '',
              rvm_type_id: '',
              contact_id: '54'
            }
          },
          {
            prescription: {
              id: '9',
              active: '1',
              created_at: '1522778709',
              modified_at: '1522778709',
              animal_id: '14',
              consult_id: '48',
              prescribing_vet_user_id: '51',
              date_of_prescription: '1522778595',
              prescription_item_list: [
                '13'
              ],
              sales_resource_id: '53',
              is_rvm: '0',
              rvm_notes: '',
              rvm_consult_fee_id: '',
              rvm_type_id: '',
              contact_id: '29'
            }
          },
          {
            prescription: {
              id: '10',
              active: '1',
              created_at: '1528122742',
              modified_at: '1528122742',
              animal_id: '1',
              consult_id: '24',
              prescribing_vet_user_id: '55',
              date_of_prescription: '1528122166',
              prescription_item_list: [
                '14'
              ],
              sales_resource_id: '65',
              is_rvm: '0',
              rvm_notes: '',
              rvm_consult_fee_id: '',
              rvm_type_id: '',
              contact_id: '24'
            }
          }
        ],
        messages: []
    }

    fetch(animalId?: string) {
        if (+animalId || +animalId === 0) {
            const itemsFiltered = this.basePrescriptions.items.filter((item: any) => {
                return item.prescription.animal_id === animalId
            });

            return {
                ...this.basePrescriptions,
                items:itemsFiltered
            };
        }

        return this.basePrescriptions;
    }

    create() {
        return {
            meta: {
              timestamp: '1583574619'
            },
            items: [
              {
                prescription: {
                  id: '2293',
                  active: '1',
                  created_at: '1583574619',
                  modified_at: '1583574619',
                  animal_id: '2',
                  consult_id: '2',
                  prescribing_vet_user_id: '8',
                  date_of_prescription: '1494809199',
                  prescription_item_list: [
                    '3808',
                    '3809'
                  ],
                  contact_id: '14'
                }
              }
            ],
            messages: []
        };
    }
}