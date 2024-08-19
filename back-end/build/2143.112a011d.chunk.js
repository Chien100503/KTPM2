"use strict";(self.webpackChunkback_end=self.webpackChunkback_end||[]).push([[2143],{92143:(Z,m,e)=>{e.r(m),e.d(m,{default:()=>B});var s=e(92132),k=e(21272),D=e(11273),_=e(38413),u=e(55356),E=e(4198),y=e(85963),A=e(94061),x=e(83997),L=e(30893),T=e(90151),p=e(68074),R=e(43739),j=e(95336),a=e(55506),C=e(54514),I=e(61535),S=e(54894),r=e(74930),t=e(14938),q=e(77965),o=e(12083);const W=[{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.email"),defaultMessage:"One account per email address"},description:{id:(0,t.g)("EditForm.inputToggle.description.email"),defaultMessage:"Disallow the user to create multiple accounts using the same email address with different authentication providers."},name:"unique_email",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.sign-up"),defaultMessage:"Enable sign-ups"},description:{id:(0,t.g)("EditForm.inputToggle.description.sign-up"),defaultMessage:"When disabled (OFF), the registration process is forbidden. No one can subscribe anymore no matter the used provider."},name:"allow_register",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.email-reset-password"),defaultMessage:"Reset password page"},description:{id:(0,t.g)("EditForm.inputToggle.description.email-reset-password"),defaultMessage:"URL of your application's reset password page."},placeholder:{id:(0,t.g)("EditForm.inputToggle.placeholder.email-reset-password"),defaultMessage:"ex: https://youtfrontend.com/reset-password"},name:"email_reset_password",type:"text",size:{col:6,xs:12}},{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.email-confirmation"),defaultMessage:"Enable email confirmation"},description:{id:(0,t.g)("EditForm.inputToggle.description.email-confirmation"),defaultMessage:"When enabled (ON), new registered users receive a confirmation email."},name:"email_confirmation",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.email-confirmation-redirection"),defaultMessage:"Redirection url"},description:{id:(0,t.g)("EditForm.inputToggle.description.email-confirmation-redirection"),defaultMessage:"After you confirmed your email, choose where you will be redirected."},placeholder:{id:(0,t.g)("EditForm.inputToggle.placeholder.email-confirmation-redirection"),defaultMessage:"ex: https://youtfrontend.com/email-confirmation"},name:"email_confirmation_redirection",type:"text",size:{col:6,xs:12}}],f=new RegExp("(^$)|((.+:\\/\\/.*)(d*)\\/?(.*))"),U=o.Ik().shape({email_confirmation_redirection:o.gl().when("email_confirmation",{is:!0,then:o.Yj().matches(f).required(),otherwise:o.Yj().nullable()}),email_reset_password:o.Yj(a.iW.string).matches(f,a.iW.regex).nullable()}),B=()=>(0,s.jsx)(a.kz,{permissions:t.P.readAdvancedSettings,children:(0,s.jsx)(K,{})}),K=()=>{const{formatMessage:d}=(0,S.A)(),l=(0,a.hN)(),{lockApp:b,unlockApp:M}=(0,a.MA)(),{notifyStatus:F}=(0,D.W)(),z=(0,r.useQueryClient)(),{get:N,put:w}=(0,a.ry)(),{formatAPIError:Q}=(0,a.wq)();(0,a.L4)();const{isLoading:H,allowedActions:{canUpdate:h}}=(0,a.ec)({update:t.P.updateAdvancedSettings}),{isLoading:Y,data:v}=(0,r.useQuery)(["users-permissions","advanced"],async()=>{const{data:n}=await N("/users-permissions/advanced");return n},{onSuccess(){F(d({id:(0,t.g)("Form.advancedSettings.data.loaded"),defaultMessage:"Advanced settings data has been loaded"}))},onError(){l({type:"warning",message:{id:(0,t.g)("notification.error"),defaultMessage:"An error occured"}})}}),G=H||Y,P=(0,r.useMutation)(n=>w("/users-permissions/advanced",n),{async onSuccess(){await z.invalidateQueries(["users-permissions","advanced"]),l({type:"success",message:{id:(0,t.g)("notification.success.saved"),defaultMessage:"Saved"}}),M()},onError(n){l({type:"warning",message:Q(n)}),M()},refetchActive:!0}),{isLoading:V}=P,$=async n=>{b(),P.mutate({...n,email_confirmation_redirection:n.email_confirmation?n.email_confirmation_redirection:""})};return G?(0,s.jsxs)(_.g,{"aria-busy":"true",children:[(0,s.jsx)(a.x7,{name:d({id:(0,t.g)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),(0,s.jsx)(u.Q,{title:d({id:(0,t.g)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),(0,s.jsx)(E.s,{children:(0,s.jsx)(a.Bl,{})})]}):(0,s.jsxs)(_.g,{"aria-busy":V,children:[(0,s.jsx)(a.x7,{name:d({id:(0,t.g)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),(0,s.jsx)(I.l1,{onSubmit:$,initialValues:v.settings,validateOnChange:!1,validationSchema:U,enableReinitialize:!0,children:({errors:n,values:c,handleChange:O,isSubmitting:X,dirty:J})=>(0,s.jsxs)(a.lV,{children:[(0,s.jsx)(u.Q,{title:d({id:(0,t.g)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"}),primaryAction:(0,s.jsx)(y.$,{loading:X,type:"submit",disabled:h?!J:!h,startIcon:(0,s.jsx)(C.A,{}),size:"S",children:d({id:"global.save",defaultMessage:"Save"})})}),(0,s.jsx)(E.s,{children:(0,s.jsx)(A.a,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,s.jsxs)(x.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,s.jsx)(L.o,{variant:"delta",as:"h2",children:d({id:"global.settings",defaultMessage:"Settings"})}),(0,s.jsxs)(T.x,{gap:6,children:[(0,s.jsx)(p.E,{col:6,s:12,children:(0,s.jsx)(R.l,{label:d({id:(0,t.g)("EditForm.inputSelect.label.role"),defaultMessage:"Default role for authenticated users"}),value:c.default_role,hint:d({id:(0,t.g)("EditForm.inputSelect.description.role"),defaultMessage:"It will attach the new authenticated user to the selected role."}),onChange:i=>O({target:{name:"default_role",value:i}}),children:v.roles.map(i=>(0,s.jsx)(j.c,{value:i.type,children:i.name},i.type))})}),W.map(i=>{let g=c[i.name];return g||(g=i.type==="bool"?!1:""),(0,s.jsx)(p.E,{...i.size,children:(0,s.jsx)(a.ah,{...i,value:g,error:n[i.name],disabled:i.name==="email_confirmation_redirection"&&c.email_confirmation===!1,onChange:O})},i.name)})]})]})})})]})})]})}}}]);
