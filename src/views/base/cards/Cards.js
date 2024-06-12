import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

import ReactImg from 'src/assets/images/react.jpg'

const Cards = () => {
  return (
    <div>
        <CCard className="mb-4">
            <form>
        <div class="input-container">
            <label  for="input1">Email From:</label>
            <input class="form-control Input" type="text" id="input1" name="input1"></input>
        </div>
        <div class="input-container">
            <label  for="input2">Aging:</label>
            <input class="form-control Input" type="text" id="input2" name="input2"></input>
        </div>
        <div class="input-container">
            <button class="btn btn-primary">Filter</button>
        </div>
    </form>
    </CCard>
    <CRow>
    <CCol xs={12}>
    <CCard className="mb-4">
    <CCardBody>
    <DocsExample href="components/table#striped-rows">
        <CTable striped>
        <CTableHead>
            <CTableRow>
            <CTableHeaderCell scope="col">From Email</CTableHeaderCell>
            <CTableHeaderCell scope="col">Inquiry Subject</CTableHeaderCell>
            <CTableHeaderCell scope="col">Sent On</CTableHeaderCell>
            <CTableHeaderCell scope="col">Aging</CTableHeaderCell>
            </CTableRow>
        </CTableHead>
        <CTableBody>
            <CTableRow>
            <CTableDataCell>Mark@mdo.com</CTableDataCell>
            <CTableDataCell>I Need help</CTableDataCell>
            <CTableDataCell>01/03/2020</CTableDataCell>
            <CTableDataCell>12 Day(s)</CTableDataCell>
            </CTableRow>
            <CTableRow>
            <CTableDataCell>Danie@mdo.com</CTableDataCell>
            <CTableDataCell>Help Please</CTableDataCell>
            <CTableDataCell>04/03/2020</CTableDataCell>
            <CTableDataCell>8 Day(s)</CTableDataCell>
            </CTableRow>
            <CTableRow>
            <CTableDataCell>sam@omd.com</CTableDataCell>
            <CTableDataCell>Help me</CTableDataCell>
            <CTableDataCell>05/03/2020</CTableDataCell>
            <CTableDataCell>7 Day(s)</CTableDataCell>
            </CTableRow>
        </CTableBody>
        </CTable>
    </DocsExample>
    </CCardBody>
    </CCard>
    </CCol>
    </CRow>
    </div>
  )
}

export default Cards
