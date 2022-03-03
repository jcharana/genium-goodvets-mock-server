import { Injectable } from '@nestjs/common';

@Injectable()
export class InvoicesService {
    private base = {
        meta: {
          timestamp: '1646290720',
          items_page: '1',
          items_page_total: '1',
          items_page_size: '10',
          items_total: '6',
          transaction_id: '9882aebb6abb3f0afca0a5e0358661dc0bdca798bc215f906e3eebaa2d44f37c'
        },
        items: [
            {
                invoice: {
                  id: '10',
                  active: '1',
                  created_at: '1502764750',
                  modified_at: '1502764750',
                  code: '400010',
                  contact_id: '29',
                  animal_id: '1',
                  consult_id: '1',
                  subtotal: '0.00',
                  tax: '0.00',
                  includes_tax: '1',
                  payment_terms_id: '1',
                  date: '1502764680',
                  date_due: '1502719200',
                  date_approved: '1502764750',
                  approved_by: '26',
                  customer_reference_number: '',
                  invoice_line_list: [
                    '3976',
                    '4231'
                  ],
                  ownership_id: '1',
                  linked_payments: []
                }
            },
            {
                invoice: {
                  id: '66',
                  active: '1',
                  created_at: '1528136988',
                  modified_at: '1530543485',
                  code: '400066',
                  contact_id: '24',
                  animal_id: '1',
                  consult_id: '54',
                  subtotal: '14.25',
                  tax: '1.43',
                  includes_tax: '1',
                  payment_terms_id: '1',
                  date: '1528136940',
                  date_due: '1528120800',
                  date_approved: '1530543485',
                  approved_by: '55',
                  customer_reference_number: '',
                  invoice_line_list: [
                    '288'
                  ],
                  ownership_id: '2',
                  linked_payments: [
                    {
                      id: '5',
                      amount: '15.68'
                    }
                  ]
                }
            },
            {
                invoice: {
                  id: '67',
                  active: '1',
                  created_at: '1528139437',
                  modified_at: '1528139437',
                  code: '400067',
                  contact_id: '24',
                  animal_id: '1',
                  consult_id: '',
                  subtotal: '15.00',
                  tax: '1.50',
                  includes_tax: '1',
                  payment_terms_id: '1',
                  date: '1528139400',
                  date_due: '1528120800',
                  date_approved: '1528139437',
                  approved_by: '55',
                  customer_reference_number: '',
                  invoice_line_list: [
                    '292'
                  ],
                  ownership_id: '2',
                  linked_payments: [
                    {
                      id: '4',
                      amount: '16.50'
                    }
                  ]
                }
            },
            {
                invoice: {
                  id: '95',
                  active: '1',
                  created_at: '1532023246',
                  modified_at: '1532461189',
                  code: '400095',
                  contact_id: '24',
                  animal_id: '1',
                  consult_id: '',
                  subtotal: '89.34',
                  tax: '8.94',
                  includes_tax: '1',
                  payment_terms_id: '1',
                  date: '1532023200',
                  date_due: '1532008800',
                  date_approved: '0',
                  approved_by: '',
                  customer_reference_number: '',
                  invoice_line_list: [
                    '585',
                    '3987',
                    '4242'
                  ],
                  ownership_id: '2',
                  linked_payments: []
                }
            },
            {
                invoice: {
                  id: '96',
                  active: '1',
                  created_at: '1532358219',
                  modified_at: '1532358219',
                  code: '400096',
                  contact_id: '24',
                  animal_id: '1',
                  consult_id: '',
                  subtotal: '157.42',
                  tax: '7.13',
                  includes_tax: '1',
                  payment_terms_id: '1',
                  date: '1532358120',
                  date_due: '1532354400',
                  date_approved: '1532358219',
                  approved_by: '55',
                  customer_reference_number: '',
                  invoice_line_list: [
                    '548',
                    '3988',
                    '4243'
                  ],
                  ownership_id: '2',
                  linked_payments: [
                    {
                      id: '6',
                      amount: '164.55'
                    }
                  ]
                }
            },
            {
                invoice: {
                  id: '97',
                  active: '1',
                  created_at: '1532369735',
                  modified_at: '1532369735',
                  code: '400097',
                  contact_id: '24',
                  animal_id: '1',
                  consult_id: '',
                  subtotal: '75.10',
                  tax: '7.51',
                  includes_tax: '1',
                  payment_terms_id: '1',
                  date: '1532369700',
                  date_due: '1532354400',
                  date_approved: '1532369735',
                  approved_by: '55',
                  customer_reference_number: '',
                  invoice_line_list: [
                    '3989',
                    '4244'
                  ],
                  ownership_id: '2',
                  linked_payments: [
                    {
                      id: '7',
                      amount: '82.61'
                    }
                  ]
                }
            },
            {
                invoice: {
                  id: '173',
                  active: '1',
                  created_at: '1544722690',
                  modified_at: '1544722789',
                  code: '400173',
                  contact_id: '24',
                  animal_id: '1',
                  consult_id: '125',
                  subtotal: '31.06',
                  tax: '2.25',
                  includes_tax: '1',
                  payment_terms_id: '1',
                  date: '1544722690',
                  date_due: '1544722690',
                  date_approved: '0',
                  approved_by: '',
                  customer_reference_number: '',
                  invoice_line_list: [
                    '840',
                    '841'
                  ],
                  ownership_id: '2',
                  linked_payments: []
                }
            },
            {
                invoice: {
                  id: '453',
                  active: '1',
                  created_at: '1569343439',
                  modified_at: '1569343464',
                  code: '400453',
                  contact_id: '24',
                  animal_id: '1',
                  consult_id: '190',
                  subtotal: '703.76',
                  tax: '62.56',
                  includes_tax: '1',
                  payment_terms_id: '1',
                  date: '1569343439',
                  date_due: '1569343439',
                  date_approved: '0',
                  approved_by: '',
                  customer_reference_number: '',
                  invoice_line_list: [
                    '1540',
                    '1541',
                    '1543',
                    '1544',
                    '1547',
                    '1549',
                    '1551',
                    '1552',
                    '1553',
                    '1554',
                    '1555',
                    '1556',
                    '1557',
                    '1558',
                    '4053',
                    '4054',
                    '4055',
                    '4056',
                    '4057',
                    '4308',
                    '4309',
                    '4310',
                    '4311',
                    '4312'
                  ],
                  ownership_id: '2',
                  linked_payments: []
                }
            },
            {
                invoice: {
                  id: '944',
                  active: '1',
                  created_at: '1598585026',
                  modified_at: '1598585026',
                  code: '400944',
                  contact_id: '24',
                  animal_id: '1',
                  consult_id: '1044',
                  subtotal: '3.73',
                  tax: '0.37',
                  includes_tax: '1',
                  payment_terms_id: '1',
                  date: '1598585026',
                  date_due: '1598585026',
                  date_approved: '0',
                  approved_by: '',
                  customer_reference_number: '',
                  invoice_line_list: [
                    '3671'
                  ],
                  ownership_id: '2',
                  linked_payments: []
                }
            },
            {
                invoice: {
                  id: '945',
                  active: '1',
                  created_at: '1599075893',
                  modified_at: '1599075893',
                  code: '400945',
                  contact_id: '24',
                  animal_id: '1',
                  consult_id: '1068',
                  subtotal: '0.00',
                  tax: '0.00',
                  includes_tax: '1',
                  payment_terms_id: '1',
                  date: '1599075893',
                  date_due: '1599075893',
                  date_approved: '0',
                  approved_by: '',
                  customer_reference_number: '',
                  invoice_line_list: [
                    '3674',
                    '3675'
                  ],
                  ownership_id: '2',
                  linked_payments: []
                }
            },
            {
                invoice: {
                    id: '1',
                    active: '1',
                    created_at: '1494879154',
                    modified_at: '1512655747',
                    code: '400001',
                    contact_id: '5',
                    animal_id: '2',
                    consult_id: '8',
                    subtotal: '67.50',
                    tax: '6.75',
                    includes_tax: '1',
                    payment_terms_id: '1',
                    date: '1494879120',
                    date_due: '1494856800',
                    date_approved: '1512655747',
                    approved_by: '55',
                    customer_reference_number: '',
                    invoice_line_list: [
                    '1',
                    '2',
                    '18',
                    '19',
                    '20'
                    ],
                    ownership_id: '2',
                    linked_payments: []
                }
            },
            {
                invoice: {
                    id: '13',
                    active: '1',
                    created_at: '1502829059',
                    modified_at: '1502829059',
                    code: '400013',
                    contact_id: '5',
                    animal_id: '2',
                    consult_id: '6',
                    subtotal: '9.00',
                    tax: '0.90',
                    includes_tax: '1',
                    payment_terms_id: '1',
                    date: '1502829059',
                    date_due: '1502829059',
                    date_approved: '0',
                    approved_by: '',
                    customer_reference_number: '',
                    invoice_line_list: [
                    '3979',
                    '3980',
                    '4234',
                    '4235'
                    ],
                    ownership_id: '2',
                    linked_payments: []
                }
            },
            {
                invoice: {
                    id: '74',
                    active: '1',
                    created_at: '1529608033',
                    modified_at: '1534265260',
                    code: '400074',
                    contact_id: '11',
                    animal_id: '2',
                    consult_id: '8',
                    subtotal: '67.50',
                    tax: '6.75',
                    includes_tax: '1',
                    payment_terms_id: '1',
                    date: '1529608033',
                    date_due: '1529608033',
                    date_approved: '0',
                    approved_by: '',
                    customer_reference_number: '',
                    invoice_line_list: [
                    '391',
                    '392',
                    '617'
                    ],
                    ownership_id: '1',
                    linked_payments: []
                }
            },
            {
                invoice: {
              id: '2',
              active: '1',
              created_at: '1496801119',
              modified_at: '1571391293',
              code: '400002',
              contact_id: '29',
              animal_id: '5',
              consult_id: '',
              subtotal: '22.50',
              tax: '2.25',
              includes_tax: '1',
              payment_terms_id: '1',
              date: '1496800860',
              date_due: '1496757600',
              date_approved: '1571391293',
              approved_by: '399',
              customer_reference_number: '1',
              invoice_line_list: [
                '3'
              ],
              ownership_id: '1',
              linked_payments: []
                }
            },
            {
                invoice: {
                id: '3',
                active: '1',
                created_at: '1497327403',
                modified_at: '1497327403',
                code: '400003',
                contact_id: '29',
                animal_id: '5',
                consult_id: '',
                subtotal: '0.00',
                tax: '0.00',
                includes_tax: '1',
                payment_terms_id: '1',
                date: '1497327300',
                date_due: '1497276000',
                date_approved: '1497327403',
                approved_by: '26',
                customer_reference_number: '',
                invoice_line_list: [
                    '3970',
                    '4225'
                ],
                ownership_id: '1',
                linked_payments: []
                }
            },
            {
                invoice: {
                id: '4',
                active: '1',
                created_at: '1497331544',
                modified_at: '1571289788',
                code: '400004',
                contact_id: '29',
                animal_id: '5',
                consult_id: '',
                subtotal: '5.00',
                tax: '0.50',
                includes_tax: '1',
                payment_terms_id: '1',
                date: '1497330660',
                date_due: '1497276000',
                date_approved: '1571289788',
                approved_by: '399',
                customer_reference_number: '',
                invoice_line_list: [
                    '3971',
                    '4226'
                ],
                ownership_id: '1',
                linked_payments: []
                }
            },
            {
                invoice: {
                id: '6',
                active: '1',
                created_at: '1497490629',
                modified_at: '1571391355',
                code: '400006',
                contact_id: '29',
                animal_id: '5',
                consult_id: '',
                subtotal: '6.50',
                tax: '0.55',
                includes_tax: '1',
                payment_terms_id: '1',
                date: '1497490500',
                date_due: '1497448800',
                date_approved: '1571391355',
                approved_by: '399',
                customer_reference_number: '',
                invoice_line_list: [
                    '8',
                    '3973',
                    '4228'
                ],
                ownership_id: '1',
                linked_payments: []
                }
            },
            {
                invoice: {
                id: '11',
                active: '1',
                created_at: '1502764827',
                modified_at: '1502764827',
                code: '400011',
                contact_id: '29',
                animal_id: '5',
                consult_id: '',
                subtotal: '0.00',
                tax: '0.00',
                includes_tax: '1',
                payment_terms_id: '1',
                date: '1502764800',
                date_due: '1502719200',
                date_approved: '1502764827',
                approved_by: '26',
                customer_reference_number: '',
                invoice_line_list: [
                    '3977',
                    '4232'
                ],
                ownership_id: '1',
                linked_payments: []
                }
            },
            {
                invoice: {
                    id: '12',
                    active: '1',
                    created_at: '1502766384',
                    modified_at: '1502766384',
                    code: '400012',
                    contact_id: '29',
                    animal_id: '5',
                    consult_id: '',
                    subtotal: '0.00',
                    tax: '0.00',
                    includes_tax: '1',
                    payment_terms_id: '1',
                    date: '1502766360',
                    date_due: '1502719200',
                    date_approved: '1502766384',
                    approved_by: '26',
                    customer_reference_number: '',
                    invoice_line_list: [
                        '3978',
                        '4233'
                    ],
                    ownership_id: '1',
                    linked_payments: []
                }
            }
        ],
        messages: []
    };

    success(animalId?: string) {

        if (+animalId || +animalId === 0) {
            
            const itemsFiltered = this.base.items.filter((item: any) => {
                return item.invoice.animal_id === animalId;
            });

            return {
                ...this.base,
                items: itemsFiltered
            };
        }

        return this.base;
    }
}