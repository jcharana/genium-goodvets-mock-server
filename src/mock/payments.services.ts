import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentsService {
    private base = {
        meta: {
          timestamp: '1646292227',
          items_page: '1',
          items_page_total: '8',
          items_page_size: '10',
          items_total: '80',
          transaction_id: 'd0d0279f8b5414d22662801d0633d1aff3057c871ab6e8ace1232b3e3b241450'
        },
        items: [
          {
            payment: {
              id: '1',
              active: '0',
              created_at: '1513180197',
              modified_at: '1513199276',
              amount: '25.00',
              method: '5',
              details: 'Cash Payment',
              date: '1513180140',
              comments: 'Test Payment',
              available: '25.00',
              allocated: '0.00',
              client_id: '5',
              cash_amount: '25.00',
              cash_change: '0.00',
              rounding_factor: '0.05',
              status: 'Accepted',
              ownership_id: '2',
              linked_invoices: []
            }
          },
          {
            payment: {
              id: '2',
              active: '1',
              created_at: '1513199385',
              modified_at: '1513199385',
              amount: '30.00',
              method: '3',
              details: '',
              date: '1513199280',
              comments: '',
              available: '0.00',
              allocated: '30.00',
              client_id: '5',
              cash_amount: '30.00',
              cash_change: '0.00',
              rounding_factor: '0.05',
              status: 'Accepted',
              ownership_id: '2',
              linked_invoices: [
                {
                  id: '15',
                  allocated_amount: '23.51'
                },
                {
                  id: '14',
                  allocated_amount: '6.49'
                }
              ]
            }
          },
          {
            payment: {
              id: '3',
              active: '1',
              created_at: '1513695631',
              modified_at: '1513695631',
              amount: '23.51',
              method: '5',
              details: '',
              date: '1513695600',
              comments: '',
              available: '0.00',
              allocated: '23.51',
              client_id: '11',
              cash_amount: '23.50',
              cash_change: '0.00',
              rounding_factor: '0.05',
              status: 'Accepted',
              ownership_id: '2',
              linked_invoices: [
                {
                  id: '17',
                  allocated_amount: '23.51'
                }
              ]
            }
          },
          {
            payment: {
              id: '4',
              active: '1',
              created_at: '1528139462',
              modified_at: '1528139462',
              amount: '16.50',
              method: '5',
              details: '',
              date: '1528139400',
              comments: '',
              available: '0.00',
              allocated: '16.50',
              client_id: '24',
              cash_amount: '16.50',
              cash_change: '0.00',
              rounding_factor: '0.05',
              status: 'Accepted',
              ownership_id: '2',
              linked_invoices: [
                {
                  id: '67',
                  allocated_amount: '16.5'
                }
              ]
            }
          },
          {
            payment: {
              id: '5',
              active: '1',
              created_at: '1530543543',
              modified_at: '1530543543',
              amount: '15.68',
              method: '5',
              details: 'This is a details test.',
              date: '1530543480',
              comments: 'This is a comments test.',
              available: '0.00',
              allocated: '15.68',
              client_id: '24',
              cash_amount: '15.70',
              cash_change: '0.00',
              rounding_factor: '0.05',
              status: 'Accepted',
              ownership_id: '2',
              linked_invoices: [
                {
                  id: '66',
                  allocated_amount: '15.68'
                }
              ]
            }
          },
          {
            payment: {
              id: '6',
              active: '1',
              created_at: '1532358241',
              modified_at: '1532358241',
              amount: '164.55',
              method: '5',
              details: '',
              date: '1532358180',
              comments: '',
              available: '0.00',
              allocated: '164.55',
              client_id: '24',
              cash_amount: '164.55',
              cash_change: '0.00',
              rounding_factor: '0.05',
              status: 'Accepted',
              ownership_id: '2',
              linked_invoices: [
                {
                  id: '96',
                  allocated_amount: '164.55'
                }
              ]
            }
          },
          {
            payment: {
              id: '7',
              active: '1',
              created_at: '1532369740',
              modified_at: '1532369740',
              amount: '82.61',
              method: '5',
              details: '',
              date: '1532369700',
              comments: '',
              available: '0.00',
              allocated: '82.61',
              client_id: '24',
              cash_amount: '82.60',
              cash_change: '0.00',
              rounding_factor: '0.05',
              status: 'Accepted',
              ownership_id: '2',
              linked_invoices: [
                {
                  id: '97',
                  allocated_amount: '82.61'
                }
              ]
            }
          },
          {
            payment: {
              id: '8',
              active: '1',
              created_at: '1534189316',
              modified_at: '1534189316',
              amount: '82.61',
              method: '5',
              details: '',
              date: '1534189260',
              comments: '',
              available: '0.00',
              allocated: '82.61',
              client_id: '93',
              cash_amount: '82.60',
              cash_change: '0.00',
              rounding_factor: '0.05',
              status: 'Accepted',
              ownership_id: '2',
              linked_invoices: [
                {
                  id: '99',
                  allocated_amount: '82.61'
                }
              ]
            }
          },
          {
            payment: {
              id: '9',
              active: '1',
              created_at: '1534190426',
              modified_at: '1534190426',
              amount: '68.00',
              method: '5',
              details: '',
              date: '1534190400',
              comments: '',
              available: '0.00',
              allocated: '68.00',
              client_id: '93',
              cash_amount: '68.00',
              cash_change: '0.00',
              rounding_factor: '0.05',
              status: 'Accepted',
              ownership_id: '2',
              linked_invoices: [
                {
                  id: '100',
                  allocated_amount: '68'
                }
              ]
            }
          },
          {
            payment: {
              id: '10',
              active: '1',
              created_at: '1534359150',
              modified_at: '1534359150',
              amount: '82.61',
              method: '5',
              details: '',
              date: '1534359120',
              comments: '',
              available: '0.00',
              allocated: '82.61',
              client_id: '93',
              cash_amount: '82.60',
              cash_change: '0.00',
              rounding_factor: '0.05',
              status: 'Accepted',
              ownership_id: '2',
              linked_invoices: [
                {
                  id: '104',
                  allocated_amount: '82.61'
                }
              ]
            }
          }
        ],
        messages: []
    };

    success(limit?: string) {

        if (+limit) {
            const itemsFiltered = this.base.items.filter((_, i) => {
                return i < +limit;
            });

            return {
                ...this.base,
                items: itemsFiltered
            };
        }

        return this.base;
    }
}