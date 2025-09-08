import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Droopy Ready Deer</title>
        <meta property="og:title" content="Droopy Ready Deer" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">
              <span>{/*locale-text_eZnXEI*/}</span>
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">
              <span>{/*locale-text__lP4-3*/}</span>
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">
              <span>{/*locale-text_bhMRr4*/}</span>
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">
              <span>{/*locale-text_rpWace*/}</span>
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">
              <span>{/*locale-text_FhUx5O*/}</span>
            </span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">
              <span>{/*locale-text_GzOI7r*/}</span>
            </span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">
              <span>{/*locale-text_IwgVdN*/}</span>
            </span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">
              <span>{/*locale-text_7-UjXw*/}</span>
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">
              <span>{/*locale-text_spoSNa*/}</span>
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">
              <span>{/*locale-text_Uk62Pc*/}</span>
            </span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110">
              <span>{/*locale-text_jj0MCd*/}</span>
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">
              <span>{/*locale-text_KBI0lf*/}</span>
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              <span>{/*locale-text_NP6uh4*/}</span>
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">
              <span>{/*locale-text_3ScBk7*/}</span>
            </span>
          </Fragment>
        }
        locale={props?.locale ?? ''}
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">
              <span>{/*locale-text_bMRYzn*/}</span>
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115">
              <span>{/*locale-text_Kk0qwy*/}</span>
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116">
              <span>{/*locale-text_FN5uS-*/}</span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117">
              <span>{/*locale-text_eNghCC*/}</span>
            </span>
          </Fragment>
        }
        locale={props?.locale ?? ''}
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118">
              <span>{/*locale-text_8Byili*/}</span>
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119">
              <span>{/*locale-text_G_7eh1*/}</span>
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120">
              <span>{/*locale-text_WFiD8-*/}</span>
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121">
              <span>{/*locale-text_xpOgXJ*/}</span>
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122">
              <span>{/*locale-text_8NGdxk*/}</span>
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123">
              <span>{/*locale-text_vfX7vM*/}</span>
            </span>
          </Fragment>
        }
        locale={props?.locale ?? ''}
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">
              <span>{/*locale-text_2zO95G*/}</span>
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              <span>{/*locale-text_AR2k1j*/}</span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126">
              <span>{/*locale-text_NCWXjB*/}</span>
            </span>
          </Fragment>
        }
        locale={props?.locale ?? ''}
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text127">
              <span>{/*locale-text_JpetNY*/}</span>
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text128">
              <span>{/*locale-text_CBCz6T*/}</span>
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text129">
              <span>{/*locale-text_xvY8kj*/}</span>
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text130">
              <span>{/*locale-text_cnHPTa*/}</span>
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              <span>{/*locale-text_KWxV6w*/}</span>
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text132">
              <span>{/*locale-text_8dGoAO*/}</span>
            </span>
          </Fragment>
        }
        locale={props?.locale ?? ''}
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text133">
              <span>{/*locale-text_Lz_pxX*/}</span>
            </span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text134">
              <span>{/*locale-text_W8AOMx*/}</span>
            </span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text135">
              <span>{/*locale-text_sedqO1*/}</span>
            </span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text136">
              <span>{/*locale-text_E3KwHf*/}</span>
            </span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text137">
              <span>{/*locale-text_WwyqC4*/}</span>
            </span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text138">
              <span>{/*locale-text_Owvuvn*/}</span>
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text139">
              <span>{/*locale-text_iJW6Yo*/}</span>
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text140">
              <span>{/*locale-text_mVTIno*/}</span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text141">
              <span>{/*locale-text_k4Q-eR*/}</span>
            </span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text142">
              <span>{/*locale-text_7gM5nR*/}</span>
            </span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text143">
              <span>{/*locale-text_W5RlcM*/}</span>
            </span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text144">
              <span>{/*locale-text_ByMP85*/}</span>
            </span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text145">
              <span>{/*locale-text_1rn9m9*/}</span>
            </span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text146">
              <span>{/*locale-text_GtpgBI*/}</span>
            </span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text147">
              <span>{/*locale-text_OoAED4*/}</span>
            </span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">
              <span>{/*locale-text__rnh98*/}</span>
            </span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text149">
              <span>{/*locale-text_cgs7KK*/}</span>
            </span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text150">
              <span>{/*locale-text_nLyI_S*/}</span>
            </span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text151">
              <span>{/*locale-text_Pxsdrf*/}</span>
            </span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text152">
              <span>{/*locale-text_NgVCd_*/}</span>
            </span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text153">
              <span>{/*locale-text_CpAd7s*/}</span>
            </span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text154">
              <span>{/*locale-text_uD5yU6*/}</span>
            </span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text155">
              <span>{/*locale-text_4bSAZ1*/}</span>
            </span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text156">
              <span>{/*locale-text_j3vUSh*/}</span>
            </span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text157">
              <span>{/*locale-text_ZgRPX7*/}</span>
            </span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text158">
              <span>{/*locale-text_Duxbyp*/}</span>
            </span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text159">
              <span>{/*locale-text_T5GtbQ*/}</span>
            </span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text160">
              <span>{/*locale-text_WGhRwm*/}</span>
            </span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text161">
              <span>{/*locale-text_ZQNDYe*/}</span>
            </span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text162">
              <span>{/*locale-text__ta_zJ*/}</span>
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text163">
              <span>{/*locale-text_NpFGvJ*/}</span>
            </span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text164">
              <span>{/*locale-text_DrSJS_*/}</span>
            </span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text165">
              <span>{/*locale-text_mRCKlA*/}</span>
            </span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text166">
              <span>{/*locale-text_p6103P*/}</span>
            </span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text167">
              <span>{/*locale-text_TUgO-g*/}</span>
            </span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text168">
              <span>{/*locale-text_4rspxz*/}</span>
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text169">
              <span>{/*locale-text_ySdE9I*/}</span>
            </span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text170">
              <span>{/*locale-text_isfYjd*/}</span>
            </span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text171">
              <span>{/*locale-text_9HeIMR*/}</span>
            </span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text172">
              <span>{/*locale-text_JHlYGk*/}</span>
            </span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text173">
              <span>{/*locale-text_EMQvhd*/}</span>
            </span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text174">
              <span>{/*locale-text_jTu9Pl*/}</span>
            </span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text175">
              <span>{/*locale-text_RWrapW*/}</span>
            </span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text176">
              <span>{/*locale-text_sqUiX9*/}</span>
            </span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text177">
              <span>{/*locale-text_G3JCKu*/}</span>
            </span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text178">
              <span>{/*locale-text_DsQ4Ci*/}</span>
            </span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text179">
              <span>{/*locale-text__PAdIn*/}</span>
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text180">
              <span>{/*locale-text_r3LVWD*/}</span>
            </span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text181">
              <span>{/*locale-text_HsnUe8*/}</span>
            </span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text182">
              <span>{/*locale-text_Z-AqMb*/}</span>
            </span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text183">
              <span>{/*locale-text_RP8c5Q*/}</span>
            </span>
          </Fragment>
        }
        locale={props?.locale ?? ''}
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text184">
              <span>{/*locale-text_7nHNc0*/}</span>
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text185">
              <span>{/*locale-text_tu91g2*/}</span>
            </span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text186">
              <span>{/*locale-text_YcCXeF*/}</span>
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text187">
              <span>{/*locale-text_1CJRvK*/}</span>
            </span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text188">
              <span>{/*locale-text_roQGpW*/}</span>
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text189">
              <span>{/*locale-text_pawPHx*/}</span>
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text190">
              <span>{/*locale-text_F5_hMS*/}</span>
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text191">
              <span>{/*locale-text_f9-daN*/}</span>
            </span>
          </Fragment>
        }
        locale={props?.locale ?? ''}
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text192">
              <span>{/*locale-text_DCoUKp*/}</span>
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text193">
              <span>{/*locale-text_3oeZap*/}</span>
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text194">
              <span>{/*locale-text_a9MCpq*/}</span>
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text195">
              <span>{/*locale-text_DqgkX8*/}</span>
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text196">
              <span>{/*locale-text_FeCuv3*/}</span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text197">
              <span>{/*locale-text_-gxehu*/}</span>
            </span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text198">
              <span>{/*locale-text_Wo_LvI*/}</span>
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text199">
              <span>{/*locale-text_HVeIaT*/}</span>
            </span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text200">
              <span>{/*locale-text_4h9soF*/}</span>
            </span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text201">
              <span>{/*locale-text_44SyQi*/}</span>
            </span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text202">
              <span>{/*locale-text_cho4mw*/}</span>
            </span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text203">
              <span>{/*locale-text_9Vidmr*/}</span>
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text204">
              <span>{/*locale-text_YMdBYn*/}</span>
            </span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text205">
              <span>{/*locale-text_VxbkSl*/}</span>
            </span>
          </Fragment>
        }
        locale={props?.locale ?? ''}
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              <span>{/*locale-text_ojuxgi*/}</span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text207">
              <span>{/*locale-text_hMtw3W*/}</span>
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text208">
              <span>{/*locale-text_4NsgmV*/}</span>
            </span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text209">
              <span>{/*locale-text_MfHtq3*/}</span>
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text210">
              <span>{/*locale-text_Haeecu*/}</span>
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text211">
              <span>{/*locale-text_oudvoS*/}</span>
            </span>
          </Fragment>
        }
        locale={props?.locale ?? ''}
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text212">
              <span>{/*locale-text_KGDrkq*/}</span>
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text213">
              <span>{/*locale-text_RJwKlj*/}</span>
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text214">
              <span>{/*locale-text_4GH61y*/}</span>
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text215">
              <span>{/*locale-text_MrrdHH*/}</span>
            </span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text216">
              <span>{/*locale-text_33irn6*/}</span>
            </span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text217">
              <span>{/*locale-text_ovnt58*/}</span>
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218">
              <span>{/*locale-text_CHG7aD*/}</span>
            </span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219">
              <span>{/*locale-text_80Zp2y*/}</span>
            </span>
          </Fragment>
        }
        locale={props?.locale ?? ''}
      ></Footer4>
    </div>
  )
}

export default Home
