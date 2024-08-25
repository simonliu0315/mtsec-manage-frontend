<template>
  <!--begin::Sidebar-->
  <aside class="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
    <!--begin::Sidebar Brand-->
    <div class="sidebar-brand">
      <!--begin::Brand Link-->
      <a href="/" class="brand-link">
        <!--begin::Brand Image-->
        <img src="../assets/NCHCLogo.png" alt="NCHC Logo" class="brand-image opacity-75 shadow" />
        <!--end::Brand Image-->
        <!--begin::Brand Text-->
        <span class="brand-text fw-light">網路管理系統</span>
        <!--end::Brand Text-->
      </a>
      <!--end::Brand Link-->
    </div>
    <!--end::Sidebar Brand-->
    <!--begin::Sidebar Wrapper-->
    <div class="sidebar-wrapper">
      <nav class="mt-2">
        <!--begin::Sidebar Menu-->
        <ul
          class="nav sidebar-menu flex-column"
          data-lte-toggle="treeview"
          role="menu"
          data-accordion="false"
        >
          <li class="nav-item menu-open">
            <a href="#" class="nav-link active">
              <i class="nav-icon bi bi-speedometer"></i>
              <p>
                {{ $t('menu.monitoringBashboard') }}
                <i class="nav-arrow bi bi-chevron-right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="/" class="nav-link active">
                  <i class="nav-icon bi bi-circle"></i>
                  <p>TWAREN監控儀錶板</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="/DomesticBackboneTrafficMonitor" class="nav-link active">
                  <i class="nav-icon bi bi-circle"></i>
                  <p>TANet監控儀錶板</p>
                </a>
              </li>
              
              <li class="nav-item">
                <a href="/ResourceSoftware" class="nav-link">
                  <i class="nav-icon bi bi-circle"></i>
                  <p>軟體資源監控儀錶板</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon bi bi-telephone"></i>
              <p>
                聯絡資料
                <i class="nav-arrow bi bi-chevron-right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="/" class="nav-link">
                  <i class="nav-icon bi bi-circle"></i>
                  <p>維運團隊</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="/" class="nav-link">
                  <i class="nav-icon bi bi-circle"></i>
                  <p>GigaPoPs</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="/" class="nav-link">
                  <i class="nav-icon bi bi-circle"></i>
                  <p>連線單位</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="/" class="nav-link">
                  <i class="nav-icon bi bi-circle"></i>
                  <p>VPLS VPN</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="/" class="nav-link">
                  <i class="nav-icon bi bi-circle"></i>
                  <p>國內外BGP Peering</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon bi bi-projector"></i>
              <p>
                監控狀況
                <i class="nav-arrow bi bi-chevron-right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="nav-icon bi bi-circle"></i>
                  <p>電路狀態</p>
                  <i class="nav-arrow bi bi-chevron-right"></i>
                  <span class="badge badge-info left">9</span>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="/DomesticCircuit" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>國內骨幹流量狀況</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>國際電路流量狀況</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>國際電路界接介面狀況</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>國際電路界接介面WAN Port IP Ping 狀況</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>國科會線路狀況</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>資策會線路界接介面狀況</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>TWNIC DNS 代管 Server 界接介面狀況</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>國內骨幹介面品質</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="nav-icon bi bi-circle"></i>
                  <p>設備狀態</p>
                  <i class="nav-arrow bi bi-chevron-right"></i>
                  <span class="badge badge-info left">6</span>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>設備CPU狀況</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>設備Memory狀況</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>設備Power Supply狀況</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>骨幹設備IP Ping狀況</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>局端與納管設備OOB IP Ping 狀況</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>機房電源設備與溫控設備IP Ping 狀況</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="nav-icon bi bi-circle"></i>
                  <p>VPLS VPN 狀態</p>
                  <i class="nav-arrow bi bi-chevron-right"></i>
                  <span class="badge badge-info left">2</span>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>VPN Client 界接介面狀況</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>VPLS VPN Peer 狀況</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="nav-icon bi bi-circle"></i>
                  <p>機房環境狀態</p>
                  <i class="fas fa-angle-left right"></i>
                  <span class="badge badge-info left">3</span>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>機房溫度狀況</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>主節點SMR電壓與電流狀況</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>RPM總負載電流狀況</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="nav-icon bi bi-circle"></i>
                  <p>連線單位狀態</p>
                  <i class="nav-arrow bi bi-chevron-right"></i>
                  <span class="badge badge-info left">3</span>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="pages/tables/data4.html" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>連線單位WAN Port Ping 狀況</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>連線單位路由狀況</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>連線單位流量狀況</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="nav-icon bi bi-circle"></i>
                  <p>BGP Peering 狀態</p>
                  <i class="nav-arrow bi bi-chevron-right"></i>
                  <span class="badge badge-info left">3</span>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>Peering BGP 狀況</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>RR_BGP 狀況</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="nav-icon bi bi-circle"></i>
                  <p>SSL VPN 狀態</p>
                  <i class="nav-arrow bi bi-chevron-right"></i>
                  <span class="badge badge-info left">1</span>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>SSL VPN 狀況</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon bi bi-journal-richtext"></i>
              <p>
                記錄查詢
                <i class="nav-arrow bi bi-chevron-right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="/" class="nav-link">
                  <i class="nav-icon bi bi-circle"></i>
                  <p>異常事件紀錄</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="/" class="nav-link">
                  <i class="nav-icon bi bi-circle"></i>
                  <p>使用者系統操作紀錄</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="/" class="nav-link">
                  <i class="nav-icon bi bi-circle"></i>
                  <p>使用者登入紀錄</p>
                </a>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon bi bi-reception-4"></i>
              <p>
                報表查詢
                <i class="nav-arrow bi bi-chevron-right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="nav-icon bi bi-circle"></i>
                  <p>100G維運報表查詢</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="nav-icon bi bi-circle"></i>
                  <p>國際電路報表查詢</p>
                  <i class="nav-arrow bi bi-chevron-right"></i>
                  <span class="badge badge-info left">5</span>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>連線單位最近三個月流出入比較圖(不含TWGate)(Top10)</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>美國電路-依照連線單位，最近一個月流出入圓餅圖(Top10)</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>美國電路各年度每月之流出入比較趨勢圖</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>連線單位歷年出入比較圖(不含TWGate)(Top10)</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>美國電路-依照連線單位，年度流出入圓餅圖(Top10)</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon bi bi-pencil-square"></i>
              <p>
                監控項目管理
                <i class="nav-arrow bi bi-chevron-right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="nav-icon bi bi-circle"></i>
                  <p>資料管理</p>
                  <i class="nav-arrow bi bi-chevron-right"></i>
                  <span class="badge badge-info left">5</span>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="./inventoryManage" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>資產管理</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>維運團隊管理</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>GigaPops管理</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>連線單位管理</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>BGP Peering管理</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>VPLS VPN管理</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="pages/tables/data.html" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>帳號管理</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="pages/tables/data1.html" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>群組授權管理</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="pages/tables/data2.html" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>系統參數設定</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>電路介面管理</p>
                      <i class="nav-arrow bi bi-chevron-right"></i>
                      <span class="badge badge-info left">3</span>
                    </a>
                    <ul class="nav nav-treeview">
                      <li class="nav-item">
                        <a href="pages/tables/data8.html" class="nav-link">
                          <i class="nav-icon bi bi-circle"></i>
                          <p>國內電路</p>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="#" class="nav-link">
                          <i class="nav-icon bi bi-circle"></i>
                          <p>國際電路</p>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="#" class="nav-link">
                          <i class="nav-icon bi bi-circle"></i>
                          <p>資策會監控電路</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <li class="nav-item">
                    <a href="/TopologyManage" class="nav-link">
                      <i class="nav-icon bi bi-circle"></i>
                      <p>網路流量拓樸圖管理</p>
                    </a>
                  </li>
              </li>
            </ul>
          </li>
        </ul>
        <!--end::Sidebar Menu-->
      </nav>
    </div>
    <!--end::Sidebar Wrapper-->
  </aside>
  <!--end::Sidebar-->
</template>