import { useState } from 'react';
import { useTable, useSortBy, useGlobalFilter, usePagination, } from "react-table";
import { Button, Card, Col, InputGroup, Table, Pagination } from 'react-bootstrap';
import React, { Fragment } from 'react';
import { Form, Modal } from 'react-bootstrap';
import { nanoid } from "nanoid";

export const COLUMNS1 = [
  {
    Header: "FIRST NAME",
    accessor: "FNAME",
    className: "text-center wd-15p border-bottom-0",
  },
  {
    Header: "LAST NAME",
    accessor: "LNAME",
    className: "text-center wd-15p border-bottom-0 ",

  },
  {
    Header: "POSITION",
    accessor: "POSITION",
    className: "text-center wd-15p border-bottom-0 ",
  },
  {
    Header: "	START DATE",
    accessor: "START",
    className: "text-center wd-15p border-bottom-0 ",
  },
  {
    Header: "SALARY",
    accessor: "SALARY",
    className: "text-center wd-15p border-bottom-0 ",
  },
  {
    Header: "E-MAIL",
    accessor: "MAIL",
    className: "text-center wd-15p border-bottom-0 ",
  }
];

const DATATABLE1 = [
  {
    id: "1",
    SNO: 1,
    NAME: "Yonna",
    LASTNAME: "Qond",
    POSITION: "Financial Controller",
    DATE: "2012/02/21",
    SALARY: "$143,654",
    EMAIL: "i.bond@datatables.net",
  },
  {
    id: "2",
    SNO: 2,
    NAME: "Zonna",
    LASTNAME: "Jond",
    POSITION: "Accountant",
    DATE: "2012/02/21",
    SALARY: "$343,654",
    EMAIL: "a.bond@datatables.net",
  },
  {
    id: "3",
    SNO: 3,
    NAME: "Nonna",
    LASTNAME: "Tond",
    POSITION: "Chief Executive Officer",
    DATE: "2012/02/21",
    SALARY: "$743,654",
    EMAIL: "s.bond@datatables.net",
  },
  {
    id: "4",
    SNO: 4,
    NAME: "Bonna",
    LASTNAME: "Oond",
    POSITION: "Chief Operating Officer",
    DATE: "2012/02/21",
    SALARY: "$643,654",
    EMAIL: "w.bond@datatables.net",
  },
  {
    id: "5",
    SNO: 5,
    NAME: "Honna",
    LASTNAME: "Pond",
    POSITION: "Data Coordinator",
    DATE: "2012/02/21",
    SALARY: "$243,654",
    EMAIL: "e.bond@datatables.net",
  },
  {
    id: "6",
    SNO: 6,
    NAME: "Fonna",
    LASTNAME: "Nond",
    POSITION: "Developer",
    DATE: "2012/02/21",
    SALARY: "$543,654",
    EMAIL: "r.bond@datatables.net",
  },
  {
    id: "7",
    SNO: 7,
    NAME: "Aonna",
    LASTNAME: "Xond",
    POSITION: "Development lead",
    DATE: "2012/02/21",
    SALARY: "$843,654",
    EMAIL: "g.bond@datatables.net",
  },
  {
    id: "8",
    SNO: 8,
    NAME: "Qonna",
    LASTNAME: "Vond",
    POSITION: "Director",
    DATE: "2012/02/21",
    SALARY: "$743,654",
    EMAIL: "x.bond@datatables.net",
  },
  {
    id: "9",
    SNO: 9,
    NAME: "Jond",
    LASTNAME: "Zonna",
    POSITION: "Marketing Officer",
    DATE: "2012/02/21",
    SALARY: "$543,654",
    EMAIL: "k.bond@datatables.net",
  },
  {
    id: "10",
    SNO: 10,
    NAME: "Yonna",
    LASTNAME: "Qond",
    POSITION: "Financial Controller",
    DATE: "2012/02/21",
    SALARY: "$143,654",
    EMAIL: "s.bond@datatables.net",
  },
  {
    id: "11",
    SNO: 11,
    NAME: "Yonna",
    LASTNAME: "Qond",
    POSITION: "Financial Controller",
    DATE: "2012/02/21",
    SALARY: "$143,654",
    EMAIL: "b.bond@datatables.net",
  },
  {
    id: "12",
    SNO: 12,
    NAME: "Yonna",
    LASTNAME: "Qond",
    POSITION: "Financial Controller",
    DATE: "2012/02/21",
    SALARY: "$143,654",
    EMAIL: "o.bond@datatables.net",
  },
  {
    id: "13",
    SNO: 13,
    NAME: "Qonna",
    LASTNAME: "Pond",
    POSITION: "Data Coordinator",
    DATE: "2012/02/21",
    SALARY: "$243,654",
    EMAIL: "q.bond@datatables.net",
  },
  {
    id: "14",
    SNO: 14,
    NAME: "Yonna",
    LASTNAME: "Qond",
    POSITION: "Financial Controller",
    DATE: "2012/02/21",
    SALARY: "$143,654",
    EMAIL: "m.bond@datatables.net",
  },
];



export const Datatable = () => {

  const tableInstance = useTable(
    {
      columns: COLUMNS1,
      data: DATATABLE1,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page, // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <Col lg={12} xl={12} >
        <Card>
          <Card.Header className="border-bottom-0 p-4">
            <Card.Title>1 - 30 of 546 users</Card.Title>
            <div className="page-options ms-auto">
              <Form.Select className="form-control select2 w-100">
                <option value="asc">Latest</option>
                <option value="desc">Oldest</option>
              </Form.Select>
            </div>
            <InputGroup className="mt-4">
              <GlobalFilter1 filter={globalFilter} setFilter={setGlobalFilter} />
              <InputGroup.Text className="btn btn-primary">
                <i className="fa fa-search text-white" aria-hidden="true"></i>
              </InputGroup.Text>
            </InputGroup>
          </Card.Header>
          <div className="e-table px-3 pb-2">
            <div className="table-responsive ">

              <div className="d-flex">
                <select
                  className="mb-3 p-2 rounded-3 table-border me-1"
                  value={pageSize}
                  // onClick={()=>{getRandomUppercaseChar()}}
                  onChange={(e) => setPageSize(Number(e.target.value))}
                >
                  {[10, 25, 50].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      Show {pageSize}
                    </option>
                  ))}
                </select>

              </div>
              <table
                {...getTableProps()}
                className="table table-bordered text-nowrap mb-0"
              >
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps(column.getSortByToggleProps())}
                          className={column.className}
                        >
                          <span className="tabletitle">{column.render("Header")}</span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {page.map((row) => {
                    prepareRow(row);
                    return (
                      <tr className="text-start" {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="d-flex mt-4 align-items-center">
                <span className="">
                  Page{" "}
                  <strong>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>{" "}
                </span>
                <span className="ms-auto ps-2">
                  <Button
                    variant=""
                    className="btn-default tablebutton me-2 my-2"
                    onClick={() => gotoPage(0)}
                    disabled={!canPreviousPage}
                  >
                    {" Previous "}
                  </Button>
                  <Button
                    variant=""
                    className="btn-default tablebutton me-2 my-2"
                    onClick={() => {
                      previousPage();
                    }}
                    disabled={!canPreviousPage}
                  >
                    {" << "}
                  </Button>
                  <Button
                    variant=""
                    className="btn-default tablebutton me-2 my-2"
                    onClick={() => {
                      previousPage();
                    }}
                    disabled={!canPreviousPage}
                  >
                    {" < "}
                  </Button>
                  <Button
                    variant=""
                    className="btn-default tablebutton me-2 my-2"
                    onClick={() => {
                      nextPage();
                    }}
                    disabled={!canNextPage}
                  >
                    {" > "}
                  </Button>
                  <Button
                    variant=""
                    className="btn-default tablebutton me-2 my-2"
                    onClick={() => {
                      nextPage();
                    }}
                    disabled={!canNextPage}
                  >
                    {" >> "}
                  </Button>
                  <Button
                    variant=""
                    className="btn-default tablebutton me-2 my-2"
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                  >
                    {" Next "}
                  </Button>
                </span>
              </div>
            </div>
          </div>
        </Card>

      </Col>

    </>
  );
};
const GlobalFilter1 = ({ filter, setFilter }) => {
  return (
    <input
      value={filter || ""}
      onChange={(e) => setFilter(e.target.value)}
      className="form-control"
      placeholder="Search..."
    />
  );
};

//
export const COLUMNS = [
  {
    Header: "FIRST NAME",
    accessor: "FNAME",
    className: "text-center wd-15p border-bottom-0",
  },
  {
    Header: "LAST NAME",
    accessor: "LNAME",
    className: "text-center wd-15p border-bottom-0 ",

  },
  {
    Header: "POSITION",
    accessor: "POSITION",
    className: "text-center wd-15p border-bottom-0 ",
  },
  {
    Header: "	START DATE",
    accessor: "START",
    className: "text-center wd-15p border-bottom-0 ",
  },
  {
    Header: "SALARY",
    accessor: "SALARY",
    className: "text-center wd-15p border-bottom-0 ",
  },
  {
    Header: "E-MAIL",
    accessor: "MAIL",
    className: "text-center wd-15p border-bottom-0 ",
  }
];
const DATATABLE = [
  {
    id: '1',
    SNO: '1',
    FNAME: 'Bella',
    LNAME: 'Chloe',
    POSITION: 'System Developer',
    START: '2018/03/12',
    SALARY: '$654,765',
    MAIL: 'b.Chloe@datatables.net',
  },
  {
    id: '2',
    SNO: '2',
    FNAME: 'Donna',
    LNAME: 'Bond',
    POSITION: 'Account Manager',
    START: '2012/02/21',
    SALARY: '$543,654',
    MAIL: 'd.bond@datatables.net',
  },
  {
    id: '3',
    SNO: '3',
    FNAME: 'Harry',
    LNAME: 'Carr',
    POSITION: 'Technical Manager',
    START: '20011/02/87',
    SALARY: '$86,000',
    MAIL: 'h.carr@datatables.net',
  },
  {
    id: '4',
    SNO: '4',
    FNAME: 'Lucas',
    LNAME: 'Dyer',
    POSITION: 'Javascript Developer',
    START: '2014/08/23',
    SALARY: '$456,123',
    MAIL: 'l.dyer@datatables.net',
  },
  {
    id: '5',
    SNO: '5',
    FNAME: 'Karen',
    LNAME: 'Hill',
    POSITION: 'Sales Manager',
    START: '2010/7/14',
    SALARY: '$432,230',
    MAIL: 'k.hill@datatables.net',
  },
  {
    id: '6',
    SNO: '6',
    FNAME: 'Dominic',
    LNAME: 'Hudson',
    POSITION: 'Sales Assistant',
    START: '2015/10/16',
    SALARY: '$654,300',
    MAIL: 'd.hudson@datatables.net',
  },
  {
    id: '7',
    SNO: '7',
    FNAME: 'Herrod',
    LNAME: 'Chandler',
    POSITION: 'Integration Specialist',
    START: '2012/08/06',
    SALARY: '$137,500',
    MAIL: 'h.chandler@datatables.net',
  },
  {
    id: '8',
    SNO: '8',
    FNAME: 'Jonathan',
    LNAME: 'Ince',
    POSITION: 'junior Manager',
    START: '2012/11/23',
    SALARY: '$345,789',
    MAIL: 'j.ince@datatables.net',
  },
  {
    id: '9',
    SNO: '9',
    FNAME: "Leonard",
    LNAME: "Ellison",
    POSITION: "Junior Javascript Developer",
    START: "2010/03/19",
    SALARY: "$205,500",
    MAIL: "l.ellison@datatables.net",
  },
  {
    id: '10',
    SNO: '10',
    FNAME: "Madeleine",
    LNAME: "Lee",
    POSITION: "Software Developer",
    START: "20015/8/23",
    SALARY: "$456,890",
    MAIL: "m.lee@datatables.net",
  },
  {
    id: '11',
    SNO: '11',
    FNAME: "Karen",
    LNAME: "Miller",
    POSITION: "Office Director",
    START: "2012/9/25",
    SALARY: "$87,654",
    MAIL: "k.miller@datatables.net",
  },
  {
    id: '12',
    SNO: '12',
    FNAME: "Lisa",
    LNAME: "Smith",
    POSITION: "Support Lead",
    START: "2011/05/21",
    SALARY: "$342,000",
    MAIL: "l.simth@datatables.net",
  },
  {
    id: '13',
    SNO: '13',
    FNAME: "Morgan",
    LNAME: "Keith",
    POSITION: "Accountant",
    START: "2012/11/27",
    SALARY: "$675,245",
    MAIL: "m.keith@datatables.net",
  },
  {
    id: '14',
    SNO: '14',
    FNAME: "Nathan",
    LNAME: "Mills",
    POSITION: "Senior Marketing Designer",
    START: "2014/10/8",
    SALARY: "$765,980",
    MAIL: "n.mills@datatables.net",
  },
  {
    id: '15',
    SNO: '15',
    FNAME: "Ruth",
    LNAME: "May",
    POSITION: "office Manager",
    START: "2010/03/17",
    SALARY: "$654,765",
    MAIL: "r.may@datatables.net",
  },
  {
    id: '16',
    SNO: '16',
    FNAME: "Penelope",
    LNAME: "Ogden",
    POSITION: "Marketing Manager",
    START: "2013/5/22",
    SALARY: "$345,510",
    MAIL: "p.ogden@datatables.net",
  },
  {
    id: '17',
    SNO: '17',
    FNAME: "Sean",
    LNAME: "Piper",
    POSITION: "Financial Officer",
    START: "2014/06/11",
    SALARY: "$725,000",
    MAIL: "s.piper@datatables.net",
  },
  {
    id: '18',
    SNO: '18',
    FNAME: "Trevor",
    LNAME: "Ross",
    POSITION: "Systems Administrator",
    START: "2011/05/23",
    SALARY: "$237,500",
    MAIL: "t.ross@datatables.net",
  },
  {
    id: '19',
    SNO: '19',
    FNAME: "Vanessa",
    LNAME: "Robertson",
    POSITION: "Software Designer",
    START: "2014/6/23",
    SALARY: "$765,654",
    MAIL: "v.robertson@datatables.net",
  },
  {
    id: '20',
    SNO: '20',
    FNAME: "Una",
    LNAME: "Richard",
    POSITION: "Personnel Manager",
    START: "2014/5/22",
    SALARY: "$765,290",
    MAIL: "u.richard@datatables.net",
  },
  {
    id: '21',
    SNO: '21',
    FNAME: "Justin",
    LNAME: "Peters",
    POSITION: "Development lead",
    START: "2013/10/23",
    SALARY: "$765,654",
    MAIL: "j.peters@datatables.net",
  },
  {
    id: '22',
    SNO: '22',
    FNAME: "Adrian",
    LNAME: "Terry",
    POSITION: "Marketing Officer",
    START: "2013/04/21",
    SALARY: "$543,769",
    MAIL: "a.terry@datatables.net",
  },
  {
    id: '23',
    SNO: '23',
    FNAME: "Cameron",
    LNAME: "Watson",
    POSITION: "Sales Support",
    START: "2013/9/7",
    SALARY: "$675,876",
    MAIL: "c.watson@datatables.net",
  },
  {
    id: '24',
    SNO: '24',
    FNAME: "Evan",
    LNAME: "Terry",
    POSITION: "Sales Manager",
    START: "2013/10/26",
    SALARY: "$66,340",
    MAIL: "d.terry@datatables.net",
  },
  {
    id: '25',
    SNO: '25',
    FNAME: "Angelica",
    LNAME: "Ramos",
    POSITION: "Chief Executive Officer",
    START: "20017/10/15",
    SALARY: "$6,234,000",
    MAIL: "a.ramos@datatables.net",
  },
  {
    id: '26',
    SNO: '26',
    FNAME: "Connor",
    LNAME: "Johne",
    POSITION: "Web Developer",
    START: "2011/1/25",
    SALARY: "$92,575",
    MAIL: "C.johne@datatables.net",
  },
  {
    id: '27',
    SNO: '27',
    FNAME: "Jennifer",
    LNAME: "Chang",
    POSITION: "Regional Director",
    START: "2012/17/11",
    SALARY: "$546,890",
    MAIL: "j.chang@datatables.net",
  },
  {
    id: '28',
    SNO: '28',
    FNAME: "Brenden",
    LNAME: "Wagner",
    POSITION: "Software Engineer",
    START: "2013/07/14",
    SALARY: "$206,850",
    MAIL: "b.wagner@datatables.net",
  },
  {
    id: '29',
    SNO: '29',
    FNAME: "Fiona",
    LNAME: "Green",
    POSITION: "Chief Operating Officer",
    START: "2015/06/23",
    SALARY: "$345,789",
    MAIL: "f.green@datatables.net",
  },
  {
    id: '30',
    SNO: '30',
    FNAME: "Shou",
    LNAME: "Itou",
    POSITION: "Regional Marketing",
    START: "2013/07/19",
    SALARY: "$335,300",
    MAIL: "s.itou@datatables.net",
  },
  {
    id: '31',
    SNO: '31',
    FNAME: "Michelle",
    LNAME: "House",
    POSITION: "Integration Specialist",
    START: "2016/07/18",
    SALARY: "$76,890",
    MAIL: "m.house@datatables.net",
  },
  {
    id: '32',
    SNO: '32',
    FNAME: "Suki",
    LNAME: "Burks",
    POSITION: "Developer",
    START: "2010/11/45",
    SALARY: "$678,890",
    MAIL: "s.burks@datatables.net",
  },
  {
    id: '33',
    SNO: '33',
    FNAME: "Prescott",
    LNAME: "Bartlett",
    POSITION: "Technical Author",
    START: "2014/12/25",
    SALARY: "$789,100",
    MAIL: "p.bartlett@datatables.net",
  },
  {
    id: '34',
    SNO: '34',
    FNAME: "Gavin",
    LNAME: "Cortez",
    POSITION: "Team Leader",
    START: "2015/1/19",
    SALARY: "$345,890",
    MAIL: "g.cortez@datatables.net",
  },
  {
    id: '35',
    SNO: '35',
    FNAME: "Martena",
    LNAME: "Mccray",
    POSITION: "Post-Sales support",
    START: "2011/03/09",
    SALARY: "$324,050",
    MAIL: "m.mccray@datatables.net",
  },
  {
    id: '36',
    SNO: '36',
    FNAME: "Unity",
    LNAME: "Butler",
    POSITION: "Marketing Designer",
    START: "2014/7/28",
    SALARY: "$34,983",
    MAIL: "u.butler@datatables.net",
  },
  {
    id: '37',
    SNO: '37',
    FNAME: "Howard",
    LNAME: "Hatfield",
    POSITION: "Office Manager",
    START: "2013/8/19",
    SALARY: "$98,000",
    MAIL: "h.hatfield@datatables.net",
  },
  {
    id: '38',
    SNO: '38',
    FNAME: "Hope",
    LNAME: "Fuentes",
    POSITION: "Secretary",
    START: "2015/07/28",
    SALARY: "$78,879",
    MAIL: "h.fuentes@datatables.net",
  },
  {
    id: '39',
    SNO: '39',
    FNAME: "Vivian",
    LNAME: "Harrell",
    POSITION: "Financial Controller",
    START: "2010/02/14",
    SALARY: "$452,500",
    MAIL: "v.harrell@datatables.net",
  },
  {
    id: '40',
    SNO: '40',
    FNAME: "Timothy",
    LNAME: "Mooney",
    POSITION: "Office Manager",
    START: "20016/12/11",
    SALARY: "$136,200",
    MAIL: "t.mooney@datatables.net",
  },
  {
    id: '41',
    SNO: '41',
    FNAME: "Jackson",
    LNAME: "Bradshaw",
    POSITION: "Director",
    START: "2011/09/26",
    SALARY: "$645,750",
    MAIL: "j.bradshaw@datatables.net",
  },
  {
    id: '42',
    SNO: '42',
    FNAME: "Olivia",
    LNAME: "Liang",
    POSITION: "Support Engineer",
    START: "2014/02/03",
    SALARY: "$234,500",
    MAIL: "o.liang@datatables.net",
  },
  {
    id: '43',
    SNO: '43',
    FNAME: "Bruno",
    LNAME: "Nash",
    POSITION: "Software Engineer",
    START: "2015/05/03",
    SALARY: "$163,500",
    MAIL: "b.nash@datatables.net",
  },
  {
    id: '44',
    SNO: '44',
    FNAME: "Sakura",
    LNAME: "Yamamoto",
    POSITION: "Support Engineer",
    START: "2010/08/19",
    SALARY: "$139,575",
    MAIL: "s.yamamoto@datatables.net",
  },
  {
    id: '45',
    SNO: '45',
    FNAME: "Thor",
    LNAME: "Walton",
    POSITION: "Developer",
    START: "2012/08/11",
    SALARY: "$98,540",
    MAIL: "t.walton@datatables.net",
  },
  {
    id: '46',
    SNO: '46',
    FNAME: "Finn",
    LNAME: "Camacho",
    POSITION: "Support Engineer",
    START: "2016/07/07",
    SALARY: "$87,500",
    MAIL: "f.camacho@datatables.net",
  },
  {
    id: '47',
    SNO: '47',
    FNAME: "Serge",
    LNAME: "Baldwin",
    POSITION: "Data Coordinator",
    START: "2017/04/09",
    SALARY: "$138,575",
    MAIL: "s.baldwin@datatables.net",
  },
  {
    id: '48',
    SNO: '48',
    FNAME: "Zenaida",
    LNAME: "Frank",
    POSITION: "Software Engineer",
    START: "2018/01/04",
    SALARY: "$125,250",
    MAIL: "z.frank@datatables.net",
  },
  {
    id: '49',
    SNO: '49',
    FNAME: "Zorita",
    LNAME: "Serrano",
    POSITION: "Software Engineer",
    START: "2017/06/01",
    SALARY: "$115,000",
    MAIL: "z.serrano@datatables.net",
  },
  {
    id: '50',
    SNO: '50',
    FNAME: "Jennifer",
    LNAME: "Acosta",
    POSITION: "Junior Javascript Developer",
    START: "2017/02/01",
    SALARY: "$75,650",
    MAIL: "j.acosta@datatables.net",
  }
];
export const Datatable1 = () => {

  const tableInstance = useTable(
    {
      columns: COLUMNS,
      data: DATATABLE,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page, // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <Col lg={12} xl={12} >
        <Card>
          <Card.Header className="border-bottom-0 p-4">
            <Card.Title>1 - 30 of 546 users</Card.Title>
            <div className="page-options ms-auto">
              <Form.Select className="form-control select2 w-100">
                <option value="asc">Latest</option>
                <option value="desc">Oldest</option>
              </Form.Select>
            </div>
            <InputGroup className="mt-4">
              <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
              <InputGroup.Text className="btn btn-primary">
                <i className="fa fa-search text-white" aria-hidden="true"></i>
              </InputGroup.Text>
            </InputGroup>
          </Card.Header>
          <div className="e-table px-3 pb-2">
            <div className="table-responsive ">

              <div className="d-flex">
                <select
                  className="mb-3 p-2 rounded-3 border me-1"
                  value={pageSize}
                  // onClick={()=>{getRandomUppercaseChar()}}
                  onChange={(e) => setPageSize(Number(e.target.value))}
                >
                  {[10, 25, 50].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      Show {pageSize}
                    </option>
                  ))}
                </select>

              </div>
              <table
                {...getTableProps()}
                className="table table-bordered text-nowrap mb-0"
              >
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps(column.getSortByToggleProps())}
                          className={column.className}
                        >
                          <span className="tabletitle">{column.render("Header")}</span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {page.map((row) => {
                    prepareRow(row);
                    return (
                      <tr className="text-start" {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="d-flex mt-4 align-items-center">
                <span className="">
                  Page{" "}
                  <strong>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>{" "}
                </span>
                <span className="ms-auto ps-2">
                  <Pagination className="product-pagination ms-auto float-end mb-3">
                    <Pagination.Item className="page-prev me-1" onClick={() => gotoPage(0)}
                      disabled={!canPreviousPage}>Prev</Pagination.Item>
                    <Pagination.Item active onClick={() => {
                      nextPage();
                    }}
                      disabled={!canNextPage}>1</Pagination.Item>
                    <Pagination.Item onClick={() => {
                      nextPage();
                    }}
                      disabled={!canNextPage}>2</Pagination.Item>
                    <Pagination.Item onClick={() => {
                      nextPage();
                    }}
                      disabled={!canNextPage}>3</Pagination.Item>

                    <Pagination.Item className="page-next" onClick={() => gotoPage(pageCount - 1)}
                      disabled={!canNextPage}>Next</Pagination.Item>
                  </Pagination>
                </span>
              </div>
            </div>
          </div>
        </Card>

      </Col>

    </>
  );
};
const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <input
      value={filter || ""}
      onChange={(e) => setFilter(e.target.value)}
      className="form-control"
      placeholder="Search..."
    />
  );
};
//responsive table
export const COLUMN = [
  {
    Header: "FIRST NAME",
    accessor: "FNAME",
    className: "wd-15p border-bottom-0",
  },
  {
    Header: "LAST NAME",
    accessor: "LNAME",
    className: "wd-15p border-bottom-0 ",

  },
  {
    Header: "POSITION",
    accessor: "POSITION",
    className: "wd-15p border-bottom-0 ",
  },
  {
    Header: "	START DATE",
    accessor: "START",
    className: "wd-15p border-bottom-0 ",
  },
  {
    Header: "SALARY",
    accessor: "SALARY",
    className: "wd-15p border-bottom-0 ",
  },
  {
    Header: "E-MAIL",
    accessor: "MAIL",
    className: "wd-15p border-bottom-0 ",
  }
];

export const RESDATATABLE = [
  {
    FNAME: "Bella",
    LNAME: "Chloe",
    POSITION: "System Developer",
    START: "2018/03/12",
    SALARY: "$654,765",
    MAIL: "b.Chloe@datatables.net",
  },
  {
    FNAME: "Donna",
    LNAME: "Bond",
    POSITION: "Account Manager",
    START: "2012/02/21",
    SALARY: "$543,654",
    MAIL: "d.bond@datatables.net",
  },
  {
    FNAME: "Harry",
    LNAME: "Carr",
    POSITION: "Technical Manager",
    START: "20011/02/87",
    SALARY: "$86,000",
    MAIL: "h.carr@datatables.net",
  },
  {
    FNAME: "Lucas",
    LNAME: "Dyer",
    POSITION: "Javascript Developer",
    START: "2014/08/23",
    SALARY: "$456,123",
    MAIL: "l.dyer@datatables.net",
  },
  {
    FNAME: "Karen",
    LNAME: "Hill",
    POSITION: "Sales Manager",
    START: "2010/7/14",
    SALARY: "$432,230",
    MAIL: "k.hill@datatables.net",
  },
  {
    FNAME: "Dominic",
    LNAME: "Hudson",
    POSITION: "Sales Assistant",
    START: "2015/10/16",
    SALARY: "$654,300",
    MAIL: "d.hudson@datatables.net",
  },
  {
    FNAME: "Herrod",
    LNAME: "Chandler",
    POSITION: "Integration Specialist",
    START: "2012/08/06",
    SALARY: "$137,500",
    MAIL: "h.chandler@datatables.net",
  },
  {
    FNAME: "Jonathan",
    LNAME: "Ince",
    POSITION: "junior Manager",
    START: "2012/11/23",
    SALARY: "$345,789",
    MAIL: "j.ince@datatables.net",
  },
  {
    FNAME: "Leonard",
    LNAME: "Ellison",
    POSITION: "Junior Javascript Developer",
    START: "2010/03/19",
    SALARY: "$205,500",
    MAIL: "l.ellison@datatables.net",
  },
  {
    FNAME: "Madeleine",
    LNAME: "Lee",
    POSITION: "Software Developer",
    START: "20015/8/23",
    SALARY: "$456,890",
    MAIL: "m.lee@datatables.net",
  },
  {
    FNAME: "Karen",
    LNAME: "Miller",
    POSITION: "Office Director",
    START: "2012/9/25",
    SALARY: "$87,654",
    MAIL: "k.miller@datatables.net",
  },
  {
    FNAME: "Lisa",
    LNAME: "Smith",
    POSITION: "Support Lead",
    START: "2011/05/21",
    SALARY: "$342,000",
    MAIL: "l.simth@datatables.net",
  },
  {
    FNAME: "Morgan",
    LNAME: "Keith",
    POSITION: "Accountant",
    START: "2012/11/27",
    SALARY: "$675,245",
    MAIL: "m.keith@datatables.net",
  },
  {
    FNAME: "Nathan",
    LNAME: "Mills",
    POSITION: "Senior Marketing Designer",
    START: "2014/10/8",
    SALARY: "$765,980",
    MAIL: "n.mills@datatables.net",
  },
  {
    FNAME: "Ruth",
    LNAME: "May",
    POSITION: "office Manager",
    START: "2010/03/17",
    SALARY: "$654,765",
    MAIL: "r.may@datatables.net",
  },
  {
    FNAME: "Penelope",
    LNAME: "Ogden",
    POSITION: "Marketing Manager",
    START: "2013/5/22",
    SALARY: "$345,510",
    MAIL: "p.ogden@datatables.net",
  },
  {
    FNAME: "Sean",
    LNAME: "Piper",
    POSITION: "Financial Officer",
    START: "2014/06/11",
    SALARY: "$725,000",
    MAIL: "s.piper@datatables.net",
  },
  {
    FNAME: "Trevor",
    LNAME: "Ross",
    POSITION: "Systems Administrator",
    START: "2011/05/23",
    SALARY: "$237,500",
    MAIL: "t.ross@datatables.net",
  },
  {
    FNAME: "Vanessa",
    LNAME: "Robertson",
    POSITION: "Software Designer",
    START: "2014/6/23",
    SALARY: "$765,654",
    MAIL: "v.robertson@datatables.net",
  },
  {
    FNAME: "Una",
    LNAME: "Richard",
    POSITION: "Personnel Manager",
    START: "2014/5/22",
    SALARY: "$765,290",
    MAIL: "u.richard@datatables.net",
  },
  {
    FNAME: "Justin",
    LNAME: "Peters",
    POSITION: "Development lead",
    START: "2013/10/23",
    SALARY: "$765,654",
    MAIL: "j.peters@datatables.net",
  },
  {
    FNAME: "Adrian",
    LNAME: "Terry",
    POSITION: "Marketing Officer",
    START: "2013/04/21",
    SALARY: "$543,769",
    MAIL: "a.terry@datatables.net",
  },
  {
    FNAME: "Cameron",
    LNAME: "Watson",
    POSITION: "Sales Support",
    START: "2013/9/7",
    SALARY: "$675,876",
    MAIL: "c.watson@datatables.net",
  },
  {
    FNAME: "Evan",
    LNAME: "Terry",
    POSITION: "Sales Manager",
    START: "2013/10/26",
    SALARY: "$66,340",
    MAIL: "d.terry@datatables.net",
  },
  {
    FNAME: "Angelica",
    LNAME: "Ramos",
    POSITION: "Chief Executive Officer",
    START: "20017/10/15",
    SALARY: "$6,234,000",
    MAIL: "a.ramos@datatables.net",
  },
  {
    FNAME: "Connor",
    LNAME: "Johne",
    POSITION: "Web Developer",
    START: "2011/1/25",
    SALARY: "$92,575",
    MAIL: "C.johne@datatables.net",
  },
  {
    FNAME: "Jennifer",
    LNAME: "Chang",
    POSITION: "Regional Director",
    START: "2012/17/11",
    SALARY: "$546,890",
    MAIL: "j.chang@datatables.net",
  },
  {
    FNAME: "Brenden",
    LNAME: "Wagner",
    POSITION: "Software Engineer",
    START: "2013/07/14",
    SALARY: "$206,850",
    MAIL: "b.wagner@datatables.net",
  },
  {
    FNAME: "Fiona",
    LNAME: "Green",
    POSITION: "Chief Operating Officer",
    START: "2015/06/23",
    SALARY: "$345,789",
    MAIL: "f.green@datatables.net",
  },
  {
    FNAME: "Shou",
    LNAME: "Itou",
    POSITION: "Regional Marketing",
    START: "2013/07/19",
    SALARY: "$335,300",
    MAIL: "s.itou@datatables.net",
  },
  {
    FNAME: "Michelle",
    LNAME: "House",
    POSITION: "Integration Specialist",
    START: "2016/07/18",
    SALARY: "$76,890",
    MAIL: "m.house@datatables.net",
  },
  {
    FNAME: "Suki",
    LNAME: "Burks",
    POSITION: "Developer",
    START: "2010/11/45",
    SALARY: "$678,890",
    MAIL: "s.burks@datatables.net",
  },
  {
    FNAME: "Prescott",
    LNAME: "Bartlett",
    POSITION: "Technical Author",
    START: "2014/12/25",
    SALARY: "$789,100",
    MAIL: "p.bartlett@datatables.net",
  },
  {
    FNAME: "Gavin",
    LNAME: "Cortez",
    POSITION: "Team Leader",
    START: "2015/1/19",
    SALARY: "$345,890",
    MAIL: "g.cortez@datatables.net",
  },
  {
    FNAME: "Martena",
    LNAME: "Mccray",
    POSITION: "Post-Sales support",
    START: "2011/03/09",
    SALARY: "$324,050",
    MAIL: "m.mccray@datatables.net",
  },
  {
    FNAME: "Unity",
    LNAME: "Butler",
    POSITION: "Marketing Designer",
    START: "2014/7/28",
    SALARY: "$34,983",
    MAIL: "u.butler@datatables.net",
  },
  {
    FNAME: "Howard",
    LNAME: "Hatfield",
    POSITION: "Office Manager",
    START: "2013/8/19",
    SALARY: "$98,000",
    MAIL: "h.hatfield@datatables.net",
  },
  {
    FNAME: "Hope",
    LNAME: "Fuentes",
    POSITION: "Secretary",
    START: "2015/07/28",
    SALARY: "$78,879",
    MAIL: "h.fuentes@datatables.net",
  },
  {
    FNAME: "Vivian",
    LNAME: "Harrell",
    POSITION: "Financial Controller",
    START: "2010/02/14",
    SALARY: "$452,500",
    MAIL: "v.harrell@datatables.net",
  },
  {
    FNAME: "Timothy",
    LNAME: "Mooney",
    POSITION: "Office Manager",
    START: "20016/12/11",
    SALARY: "$136,200",
    MAIL: "t.mooney@datatables.net",
  },
  {
    FNAME: "Jackson",
    LNAME: "Bradshaw",
    POSITION: "Director",
    START: "2011/09/26",
    SALARY: "$645,750",
    MAIL: "j.bradshaw@datatables.net",
  },
  {
    FNAME: "Olivia",
    LNAME: "Liang",
    POSITION: "Support Engineer",
    START: "2014/02/03",
    SALARY: "$234,500",
    MAIL: "o.liang@datatables.net",
  },
  {
    FNAME: "Bruno",
    LNAME: "Nash",
    POSITION: "Software Engineer",
    START: "2015/05/03",
    SALARY: "$163,500",
    MAIL: "b.nash@datatables.net",
  },
  {
    FNAME: "Sakura",
    LNAME: "Yamamoto",
    POSITION: "Support Engineer",
    START: "2010/08/19",
    SALARY: "$139,575",
    MAIL: "s.yamamoto@datatables.net",
  },
  {
    FNAME: "Thor",
    LNAME: "Walton",
    POSITION: "Developer",
    START: "2012/08/11",
    SALARY: "$98,540",
    MAIL: "t.walton@datatables.net",
  },
  {
    FNAME: "Finn",
    LNAME: "Camacho",
    POSITION: "Support Engineer",
    START: "2016/07/07",
    SALARY: "$87,500",
    MAIL: "f.camacho@datatables.net",
  },
  {
    FNAME: "Serge",
    LNAME: "Baldwin",
    POSITION: "Data Coordinator",
    START: "2017/04/09",
    SALARY: "$138,575",
    MAIL: "s.baldwin@datatables.net",
  },
  {
    FNAME: "Zenaida",
    LNAME: "Frank",
    POSITION: "Software Engineer",
    START: "2018/01/04",
    SALARY: "$125,250",
    MAIL: "z.frank@datatables.net",
  },
  {
    FNAME: "Zorita",
    LNAME: "Serrano",
    POSITION: "Software Engineer",
    START: "2017/06/01",
    SALARY: "$115,000",
    MAIL: "z.serrano@datatables.net",
  },
  {
    FNAME: "Jennifer",
    LNAME: "Acosta",
    POSITION: "Junior Javascript Developer",
    START: "2017/02/01",
    SALARY: "$75,650",
    MAIL: "j.acosta@datatables.net",
  },

];

export const ResponsiveDataTable = () => {

  const tableInstance = useTable(
    {
      columns: COLUMN,
      data: RESDATATABLE,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page, // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <div className="e-table pb-5">
        <div className="d-flex">
          <select
            className="mb-4 border me-1 text-dark bg-transparent p-2 rounded-3"
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 25, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
          <GlobalResFilter2 filter={globalFilter} setFilter={setGlobalFilter} />
        </div>
        <div className='table-responsive'>
          <Table
            {...getTableProps()}
            className="border-top-0  table-bordered text-nowrap border-bottom"
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className={column.className}
                    >
                      <span className="tabletitle">{column.render("Header")}</span>
                      <span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <i className="fa fa-angle-down"></i>
                          ) : (
                            <i className="fa fa-angle-up"></i>
                          )
                        ) : (
                          ""
                        )}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr className="text-start" {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <div className="d-block d-sm-flex mt-4 ">
          <span className="">
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <span className="ms-sm-auto ">
            <Pagination className="product-pagination ms-auto float-end mb-3">
              <Pagination.Item className="page-prev me-1" onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}>Prev</Pagination.Item>
              <Pagination.Item active onClick={() => {
                nextPage();
              }}
                disabled={!canNextPage}>1</Pagination.Item>
              <Pagination.Item onClick={() => {
                nextPage();
              }}
                disabled={!canNextPage}>2</Pagination.Item>
              <Pagination.Item onClick={() => {
                nextPage();
              }}
                disabled={!canNextPage}>3</Pagination.Item>

              <Pagination.Item className="page-next" onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}>Next</Pagination.Item>
            </Pagination>
          </span>
        </div>
      </div>

    </>
  );
};
const GlobalResFilter2 = ({ filter, setFilter }) => {
  return (
    <span className="d-flex ms-auto">
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        className="form-control mb-4"
        placeholder="Search..."
      />
    </span>
  );
};
//basic datatable
export const COLUMNS3 = [
  {
    Header: "FIRST NAME",
    accessor: "FNAME",
    className: "wd-15p border-bottom-0",
  },
  {
    Header: "LAST NAME",
    accessor: "LNAME",
    className: "wd-15p border-bottom-0 ",

  },
  {
    Header: "POSITION",
    accessor: "POSITION",
    className: "wd-15p border-bottom-0 ",
  },
  {
    Header: "	START DATE",
    accessor: "START",
    className: "wd-15p border-bottom-0 ",
  },
  {
    Header: "SALARY",
    accessor: "SALARY",
    className: "wd-15p border-bottom-0 ",
  },
  {
    Header: "E-MAIL",
    accessor: "MAIL",
    className: "wd-15p border-bottom-0 ",
  }
];

export const DATATABLE3 = [
  {
    FNAME: 'Bella',
    LNAME: 'Chloe',
    POSITION: 'System Developer',
    START: '2018/03/12',
    SALARY: '$654,765',
    MAIL: 'b.Chloe@datatables.net',
  },
  {
    FNAME: 'Donna',
    LNAME: 'Bond',
    POSITION: 'Account Manager',
    START: '2012/02/21',
    SALARY: '$543,654',
    MAIL: 'd.bond@datatables.net',
  },
  {
    FNAME: 'Harry',
    LNAME: 'Carr',
    POSITION: 'Technical Manager',
    START: '20011/02/87',
    SALARY: '$86,000',
    MAIL: 'h.carr@datatables.net',
  },
  {
    FNAME: 'Lucas',
    LNAME: 'Dyer',
    POSITION: 'Javascript Developer',
    START: '2014/08/23',
    SALARY: '$456,123',
    MAIL: 'l.dyer@datatables.net',
  },
  {
    FNAME: 'Karen',
    LNAME: 'Hill',
    POSITION: 'Sales Manager',
    START: '2010/7/14',
    SALARY: '$432,230',
    MAIL: 'k.hill@datatables.net',
  },
  {
    FNAME: 'Dominic',
    LNAME: 'Hudson',
    POSITION: 'Sales Assistant',
    START: '2015/10/16',
    SALARY: '$654,300',
    MAIL: 'd.hudson@datatables.net',
  },
  {
    FNAME: 'Herrod',
    LNAME: 'Chandler',
    POSITION: 'Integration Specialist',
    START: '2012/08/06',
    SALARY: '$137,500',
    MAIL: 'h.chandler@datatables.net',
  },
  {
    FNAME: 'Jonathan',
    LNAME: 'Ince',
    POSITION: 'junior Manager',
    START: '2012/11/23',
    SALARY: '$345,789',
    MAIL: 'j.ince@datatables.net',
  },
  {
    FNAME: "Leonard",
    LNAME: "Ellison",
    POSITION: "Junior Javascript Developer",
    START: "2010/03/19",
    SALARY: "$205,500",
    MAIL: "l.ellison@datatables.net",
  },
  {
    FNAME: "Madeleine",
    LNAME: "Lee",
    POSITION: "Software Developer",
    START: "20015/8/23",
    SALARY: "$456,890",
    MAIL: "m.lee@datatables.net",
  },
  {
    FNAME: "Karen",
    LNAME: "Miller",
    POSITION: "Office Director",
    START: "2012/9/25",
    SALARY: "$87,654",
    MAIL: "k.miller@datatables.net",
  },
  {
    FNAME: "Lisa",
    LNAME: "Smith",
    POSITION: "Support Lead",
    START: "2011/05/21",
    SALARY: "$342,000",
    MAIL: "l.simth@datatables.net",
  },
  {
    FNAME: "Morgan",
    LNAME: "Keith",
    POSITION: "Accountant",
    START: "2012/11/27",
    SALARY: "$675,245",
    MAIL: "m.keith@datatables.net",
  },
  {
    FNAME: "Nathan",
    LNAME: "Mills",
    POSITION: "Senior Marketing Designer",
    START: "2014/10/8",
    SALARY: "$765,980",
    MAIL: "n.mills@datatables.net",
  },
  {
    FNAME: "Ruth",
    LNAME: "May",
    POSITION: "office Manager",
    START: "2010/03/17",
    SALARY: "$654,765",
    MAIL: "r.may@datatables.net",
  },
  {
    FNAME: "Penelope",
    LNAME: "Ogden",
    POSITION: "Marketing Manager",
    START: "2013/5/22",
    SALARY: "$345,510",
    MAIL: "p.ogden@datatables.net",
  },
  {
    FNAME: "Sean",
    LNAME: "Piper",
    POSITION: "Financial Officer",
    START: "2014/06/11",
    SALARY: "$725,000",
    MAIL: "s.piper@datatables.net",
  },
  {
    FNAME: "Trevor",
    LNAME: "Ross",
    POSITION: "Systems Administrator",
    START: "2011/05/23",
    SALARY: "$237,500",
    MAIL: "t.ross@datatables.net",
  },
  {
    FNAME: "Vanessa",
    LNAME: "Robertson",
    POSITION: "Software Designer",
    START: "2014/6/23",
    SALARY: "$765,654",
    MAIL: "v.robertson@datatables.net",
  },
  {
    FNAME: "Una",
    LNAME: "Richard",
    POSITION: "Personnel Manager",
    START: "2014/5/22",
    SALARY: "$765,290",
    MAIL: "u.richard@datatables.net",
  },
  {
    FNAME: "Justin",
    LNAME: "Peters",
    POSITION: "Development lead",
    START: "2013/10/23",
    SALARY: "$765,654",
    MAIL: "j.peters@datatables.net",
  },
  {
    FNAME: "Adrian",
    LNAME: "Terry",
    POSITION: "Marketing Officer",
    START: "2013/04/21",
    SALARY: "$543,769",
    MAIL: "a.terry@datatables.net",
  },
  {
    FNAME: "Cameron",
    LNAME: "Watson",
    POSITION: "Sales Support",
    START: "2013/9/7",
    SALARY: "$675,876",
    MAIL: "c.watson@datatables.net",
  },
  {
    FNAME: "Evan",
    LNAME: "Terry",
    POSITION: "Sales Manager",
    START: "2013/10/26",
    SALARY: "$66,340",
    MAIL: "d.terry@datatables.net",
  },
  {
    FNAME: "Angelica",
    LNAME: "Ramos",
    POSITION: "Chief Executive Officer",
    START: "20017/10/15",
    SALARY: "$6,234,000",
    MAIL: "a.ramos@datatables.net",
  },
  {
    FNAME: "Connor",
    LNAME: "Johne",
    POSITION: "Web Developer",
    START: "2011/1/25",
    SALARY: "$92,575",
    MAIL: "C.johne@datatables.net",
  },
  {
    FNAME: "Jennifer",
    LNAME: "Chang",
    POSITION: "Regional Director",
    START: "2012/17/11",
    SALARY: "$546,890",
    MAIL: "j.chang@datatables.net",
  },
  {
    FNAME: "Brenden",
    LNAME: "Wagner",
    POSITION: "Software Engineer",
    START: "2013/07/14",
    SALARY: "$206,850",
    MAIL: "b.wagner@datatables.net",
  },
  {
    FNAME: "Fiona",
    LNAME: "Green",
    POSITION: "Chief Operating Officer",
    START: "2015/06/23",
    SALARY: "$345,789",
    MAIL: "f.green@datatables.net",
  },
  {
    FNAME: "Shou",
    LNAME: "Itou",
    POSITION: "Regional Marketing",
    START: "2013/07/19",
    SALARY: "$335,300",
    MAIL: "s.itou@datatables.net",
  },
  {
    FNAME: "Michelle",
    LNAME: "House",
    POSITION: "Integration Specialist",
    START: "2016/07/18",
    SALARY: "$76,890",
    MAIL: "m.house@datatables.net",
  },
  {
    FNAME: "Suki",
    LNAME: "Burks",
    POSITION: "Developer",
    START: "2010/11/45",
    SALARY: "$678,890",
    MAIL: "s.burks@datatables.net",
  },
  {
    FNAME: "Prescott",
    LNAME: "Bartlett",
    POSITION: "Technical Author",
    START: "2014/12/25",
    SALARY: "$789,100",
    MAIL: "p.bartlett@datatables.net",
  },
  {
    FNAME: "Gavin",
    LNAME: "Cortez",
    POSITION: "Team Leader",
    START: "2015/1/19",
    SALARY: "$345,890",
    MAIL: "g.cortez@datatables.net",
  },
  {
    FNAME: "Martena",
    LNAME: "Mccray",
    POSITION: "Post-Sales support",
    START: "2011/03/09",
    SALARY: "$324,050",
    MAIL: "m.mccray@datatables.net",
  },
  {
    FNAME: "Unity",
    LNAME: "Butler",
    POSITION: "Marketing Designer",
    START: "2014/7/28",
    SALARY: "$34,983",
    MAIL: "u.butler@datatables.net",
  },
  {
    FNAME: "Howard",
    LNAME: "Hatfield",
    POSITION: "Office Manager",
    START: "2013/8/19",
    SALARY: "$98,000",
    MAIL: "h.hatfield@datatables.net",
  },
  {
    FNAME: "Hope",
    LNAME: "Fuentes",
    POSITION: "Secretary",
    START: "2015/07/28",
    SALARY: "$78,879",
    MAIL: "h.fuentes@datatables.net",
  },
  {
    FNAME: "Vivian",
    LNAME: "Harrell",
    POSITION: "Financial Controller",
    START: "2010/02/14",
    SALARY: "$452,500",
    MAIL: "v.harrell@datatables.net",
  },
  {
    FNAME: "Timothy",
    LNAME: "Mooney",
    POSITION: "Office Manager",
    START: "20016/12/11",
    SALARY: "$136,200",
    MAIL: "t.mooney@datatables.net",
  },
  {
    FNAME: "Jackson",
    LNAME: "Bradshaw",
    POSITION: "Director",
    START: "2011/09/26",
    SALARY: "$645,750",
    MAIL: "j.bradshaw@datatables.net",
  },
  {
    FNAME: "Olivia",
    LNAME: "Liang",
    POSITION: "Support Engineer",
    START: "2014/02/03",
    SALARY: "$234,500",
    MAIL: "o.liang@datatables.net",
  },
  {
    FNAME: "Bruno",
    LNAME: "Nash",
    POSITION: "Software Engineer",
    START: "2015/05/03",
    SALARY: "$163,500",
    MAIL: "b.nash@datatables.net",
  },
  {
    FNAME: "Sakura",
    LNAME: "Yamamoto",
    POSITION: "Support Engineer",
    START: "2010/08/19",
    SALARY: "$139,575",
    MAIL: "s.yamamoto@datatables.net",
  },
  {
    FNAME: "Thor",
    LNAME: "Walton",
    POSITION: "Developer",
    START: "2012/08/11",
    SALARY: "$98,540",
    MAIL: "t.walton@datatables.net",
  },
  {
    FNAME: "Finn",
    LNAME: "Camacho",
    POSITION: "Support Engineer",
    START: "2016/07/07",
    SALARY: "$87,500",
    MAIL: "f.camacho@datatables.net",
  },
  {
    FNAME: "Serge",
    LNAME: "Baldwin",
    POSITION: "Data Coordinator",
    START: "2017/04/09",
    SALARY: "$138,575",
    MAIL: "s.baldwin@datatables.net",
  },
  {
    FNAME: "Zenaida",
    LNAME: "Frank",
    POSITION: "Software Engineer",
    START: "2018/01/04",
    SALARY: "$125,250",
    MAIL: "z.frank@datatables.net",
  },
  {
    FNAME: "Zorita",
    LNAME: "Serrano",
    POSITION: "Software Engineer",
    START: "2017/06/01",
    SALARY: "$115,000",
    MAIL: "z.serrano@datatables.net",
  },
  {
    FNAME: "Jennifer",
    LNAME: "Acosta",
    POSITION: "Junior Javascript Developer",
    START: "2017/02/01",
    SALARY: "$75,650",
    MAIL: "j.acosta@datatables.net",
  }
];
export const BasicDataTable = () => {

  const tableInstance = useTable(
    {
      columns: COLUMNS3,
      data: DATATABLE3,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page, // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>

      <div className="e-table pb-5">
        <div className="d-block">
          <select
            className="mb-4 border me-1 text-dark bg-transparent p-2 rounded-3"
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 25, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
          <GlobalFilter3 filter={globalFilter} setFilter={setGlobalFilter} />
        </div>

        <div className='table-responsive'>
          <Table
            {...getTableProps()}
            className="border-top-0 table-bordered text-nowrap border-bottom">
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className={column.className}
                    >
                      <span className="tabletitle">{column.render("Header")}</span>
                      <span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <i className="fa fa-angle-down"></i>
                          ) : (
                            <i className="fa fa-angle-up"></i>
                          )
                        ) : (
                          ""
                        )}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr className="text-start" {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <div className="d-block d-sm-flex mt-4 ">
          <span className="">
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <span className="ms-sm-auto">
            <Pagination className="product-pagination ms-auto float-end mb-3">
              <Pagination.Item className="page-prev me-1" onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}>Prev</Pagination.Item>
              <Pagination.Item active onClick={() => {
                nextPage();
              }}
                disabled={!canNextPage}>1</Pagination.Item>
              <Pagination.Item onClick={() => {
                nextPage();
              }}
                disabled={!canNextPage}>2</Pagination.Item>
              <Pagination.Item onClick={() => {
                nextPage();
              }}
                disabled={!canNextPage}>3</Pagination.Item>

              <Pagination.Item className="page-next" onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}>Next</Pagination.Item>
            </Pagination>
          </span>
        </div>
      </div>



    </>
  );
};
const GlobalFilter3 = ({ filter, setFilter }) => {
  return (
    <span className="datatable">
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        className="form-control mb-4 float-end p-2 rounded-3"
        placeholder="Search..."
      />
    </span>
  );
};

//Edit table
export const BasicEditTable = () => {
  const data = [
    {
      id: 1,
      fullName: "Bella Chloe",
      position: "System Developer",
      salary: "$654,765",
      email: "b.Chloe@datatables.net",
    },
    {
      id: 2,
      fullName: "Donna Bond",
      position: "Account Manager",
      salary: "	$543,654",
      email: "d.bond@datatables.net",
    },
    {
      id: 3,
      fullName: "Harry	Carr",
      position: "Technical Manager",
      salary: "$86,000",
      email: "h.carr@datatables.net",
    },
    {
      id: 4,
      fullName: "Lucas Dyer",
      position: "Javascript Developer",
      salary: "$456,123",
      email: "l.dyer@datatables.net",
    },
    {
      id: 5,
      fullName: "Karen Hill",
      position: "Sales Manager",
      salary: "$432,230",
      email: "k.hill@datatables.net",
    },
    {
      id: 6,
      fullName: "Dominic Hudson",
      position: "Sales Assistant",
      salary: "$654,300",
      email: "d.hudson@datatables.net",
    },
  ];
  const [contacts, setContacts] = useState(data);

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    position: "",
    salary: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      position: editFormData.position,
      salary: editFormData.salary,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      position: contact.position,
      salary: contact.salary,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <div className='table-responsive'>
          <table
            id="delete-datatable"
            className="table table-bordered text-nowrap border-bottom"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>position</th>
                <th>Salary</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <Fragment key={contact.id}>
                  {editContactId === contact.id ? (
                    <EditableRows
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRows
                      contact={contact}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </form>

      {/* <h2>Add a Contact</h2> */}

    </div>
  );
};
const EditableRows = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required
          placeholder="Enter an position..."
          name="position"
          value={editFormData.position}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required
          placeholder="Enter a phone number..."
          name="salary"
          value={editFormData.salary}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <Button variant="" className="btn btn-primary me-1" type="submit">
          <i className="fe fe-check-circle"> </i>
        </Button>
        <Button
          variant=""
          className="btn btn-danger me-1"

          onClick={handleCancelClick}
        >
          <i className="fe fe-x-circle"> </i>
        </Button>
      </td>
    </tr>
  );
};
const ReadOnlyRows = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.position}</td>
      <td>{contact.salary}</td>
      <td>{contact.email}</td>
      <td>
        <Button
          variant=""
          className="btn btn-primary me-1"
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          <i className="fe fe-edit"></i>
        </Button>
        <Button
          variant=""
          className="btn btn-danger me-1"
          type="button"
          onClick={() => handleDeleteClick(contact.id)}
        >
          <i className="fe fe-trash-2"> </i>
        </Button>
      </td>
    </tr>
  );
};
//
export const Savetable = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const data = [
    {
      id: 1,
      fullName: "Bella Chloe",
      position: "System Developer",
      start: "2018/03/12",
      salary: "$654,765",
      email: "b.Chloe@datatables.net",
    },
    {
      id: 2,
      fullName: "Donna Bond",
      position: "Account Manager",
      start: "2012/02/21",
      salary: "	$543,654",
      email: "d.bond@datatables.net",
    },
    {
      id: 3,
      fullName: "Harry Carr",
      position: "Technical Manager",
      start: "2011/02/17",
      salary: "$86,000",
      email: "h.carr@datatables.net",
    },
    {
      id: 4,
      fullName: "Lucas Dyer",
      position: "Javascript Developer",
      start: "2014/08/23",
      salary: "$456,123",
      email: "l.dyer@datatables.net",
    },
    {
      id: 5,
      fullName: "Karen Hill",
      position: "Sales Manager",
      start: "2010/7/14",
      salary: "$432,230",
      email: "k.hill@datatables.net",
    },
    {
      id: 6,
      fullName: "Dominic Hudson",
      position: "Sales Assistant",
      start: "2015/10/16",
      salary: "$654,300",
      email: "d.hudson@datatables.net",
    },
  ];
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    position: "",
    start: "",
    salary: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    position: "",
    start: "",
    salary: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      position: addFormData.position,
      start: addFormData.start,
      salary: addFormData.salary,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      position: editFormData.position,
      start: addFormData.start,
      salary: editFormData.salary,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      position: contact.position,
      start: contact.start,
      salary: contact.salary,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container table-responsive">
      <form onSubmit={handleEditFormSubmit}>
        <Button
          variant=""
          className="btn btn-primary mb-3"
          onClick={() => setModalShow(true)}
        >
          Add New Row
        </Button>
        <table
          id="delete-datatable"
          className="table table-bordered text-nowrap border-bottom"
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>position</th>
              <th>Start Date</th>
              <th>Salary</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment key={contact.id}>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Add New Row</Modal.Title>
          <Button
            variant=""
            className="btn btn-close"
            onClick={() => setModalShow(false)}
          >
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddFormSubmit}>
            <input
              type="text"
              name="fullName"
              required
              placeholder="Enter a name..."
              onChange={handleAddFormChange}
              className="form-control mb-2"
            />
            <input
              type="text"
              name="position"
              required
              placeholder="Enter an addres..."
              onChange={handleAddFormChange}
              className="form-control mb-2"
            />
            <input
              type="text"
              name="salary"
              required
              placeholder="Enter a phone number..."
              onChange={handleAddFormChange}
              className="form-control mb-2"
            />
            <input
              type="date"
              name="Start Date"
              required
              placeholder="Enter a phone number..."
              onChange={handleAddFormChange}
              className="form-control mb-2"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter an email..."
              onChange={handleAddFormChange}
              className="form-control mb-2"
            />
            <Button variant="" className="btn btn-primary me-2" type="submit">
              Add
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn btn-primary"
            onClick={() => setModalShow(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required
          placeholder="Enter an position..."
          name="position"
          value={editFormData.position}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required
          placeholder="Enter a phone number..."
          name="phone number"
          value={editFormData.salary}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="date"
          required
          placeholder="Enter start date..."
          name="Start Date"
          value={editFormData.start}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <Button variant="" className="btn btn-primary me-1" type="submit">
          <i className="fe fe-check-circle"> </i>
        </Button>
        <Button
          variant=""
          className="btn btn-danger me-1"

          onClick={handleCancelClick}
        >
          <i className="fe fe-x-circle"> </i>
        </Button>
      </td>
    </tr>
  );
};
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.position}</td>
      <td>{contact.start}</td>
      <td>{contact.salary}</td>
      <td>{contact.email}</td>
      <td>
        <Button
          variant=""
          className="btn btn-primary me-1"
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          <i className="fe fe-edit"> </i>
        </Button>
        <Button
          variant=""
          className="btn btn-danger me-1"
          type="button"
          onClick={() => handleDeleteClick(contact.id)}
        >
          <i className="fe fe-trash-2"> </i>
        </Button>
      </td>
    </tr>
  );
};