import React, { useState } from 'react'
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

const Collapses = () => {
  const [visible, setVisible] = useState(false)
  const [visibleHorizontal, setVisibleHorizontal] = useState(false)
  const [visibleA, setVisibleA] = useState(false)
  const [visibleB, setVisibleB] = useState(false)

  return (
    <div>
        <CCard className="mb-4">
            <form>
        <div class="input-container">
            <label  for="input1">From Email : </label>
            <input class="form-control Input " type="text" id="input1" name="input1"></input>
        </div>
        <div class="input-container">
            <label for="input2">Assigned To : </label>
            <input class="form-control Input " type="text" id="input2" name="input2"></input>
        </div>
        <div class="input-container">
            <label for="input1">Aging : </label>
            <input class="form-control Input " type="text" id="input3" name="input3"></input>
        </div>
        <div class="input-container">
            <button class="btn btn-primary ">Filter</button>
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
            <CTableHeaderCell scope="col">Status</CTableHeaderCell>
            <CTableHeaderCell scope="col">Assigned To</CTableHeaderCell>
            <CTableHeaderCell scope="col">From Email</CTableHeaderCell>
            <CTableHeaderCell scope="col">Inquiry Subject</CTableHeaderCell>
            <CTableHeaderCell scope="col">Sent On</CTableHeaderCell>
            <CTableHeaderCell scope="col">Complexity Score</CTableHeaderCell>
            <CTableHeaderCell scope="col">Aging</CTableHeaderCell>
            </CTableRow>
        </CTableHead>
        <CTableBody>
            <CTableRow>
            <CTableDataCell>Assigned</CTableDataCell>
            <CTableDataCell>Otto</CTableDataCell>
            <CTableDataCell>Joe@mdo.com</CTableDataCell>
            <CTableDataCell>I need search</CTableDataCell>
            <CTableDataCell>01/02/2019</CTableDataCell>
            <CTableDataCell>5</CTableDataCell>
            <CTableDataCell>17 Day(s)</CTableDataCell>
            </CTableRow>
            <CTableRow>
            <CTableDataCell>Assigned</CTableDataCell>
            <CTableDataCell>Tomy</CTableDataCell>
            <CTableDataCell>man@dom.com</CTableDataCell>
            <CTableDataCell>I need help</CTableDataCell>
            <CTableDataCell>01/02/2019</CTableDataCell>
            <CTableDataCell>5</CTableDataCell>
            <CTableDataCell>17 Day(s)</CTableDataCell>
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

export default Collapses
