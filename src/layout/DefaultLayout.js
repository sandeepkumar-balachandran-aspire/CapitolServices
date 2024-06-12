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
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = () => {
  
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppContent />
          {/* <CRow>
            <CCol xs={12}>
          <CCard className="mb-4">
            <CCardBody>
              <DocsExample href="components/table#striped-rows">
                <CTable striped>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">#</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell>Mark</CTableDataCell>
                      <CTableDataCell>Otto</CTableDataCell>
                      <CTableDataCell>@mdo</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">2</CTableHeaderCell>
                      <CTableDataCell>Jacob</CTableDataCell>
                      <CTableDataCell>Thornton</CTableDataCell>
                      <CTableDataCell>@fat</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">3</CTableHeaderCell>
                      <CTableDataCell colSpan={2}>Larry the Bird</CTableDataCell>
                      <CTableDataCell>@twitter</CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </DocsExample>
            </CCardBody>
          </CCard>
            </CCol>
          </CRow> */}

        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
