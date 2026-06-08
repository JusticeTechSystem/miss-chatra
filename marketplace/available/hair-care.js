// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tf0KwZtG/2lVxOzWmObU+jIX+zmDr1ZCm4YnD1c8EidQX3i7CWBIUKqDSkjNgjjDEkFmnnl+i0A0xI81XgLx+NII0IZmmWdB4oIfYzw8SjCC//HH9j357XW4ZXpXrgX8CizYZ6DGcLqtust3h8RJQVhtEGelEFFGhfzUj1tzSAzHFiyHBFA9GiQtuxIvmm07cehryspZiWV2ZA/ovJM1mQok6Tv4N1LXbPrJrOOIMY+fh3gqMoCbR4MrvtSZtaDO3Xew5afangNNmz0qWmk5nJshuBDmhLv3RzaVg0YyUFLWWfODlfBdwLXlTJg/m7H3SGH1rh51bHgIZUMx1r+nUN7t4L3gSuykM7ofyRJPE31DjyAVeRVxREfquyaowpGNjYFVONEPkAQ+LUTin+bdYAWAlN9uXijoJ/KsKgcEPxzvdh7+Ff4sny6D+elzagx4CuojNTSnSKQuJdoIudOjEmBuCXgHWYP0yA/HHYyMT4BmjU99bpljFkHfXZQVJVFP63rAras8hKGt1cTwReUAJLEC6TL3sKTYHcaENLaT+IB14cL9i3Ug9qzcDQA/bgV58Y4NO6Ow8Dwo6peFR9FPfTloQ6EuimULduRqpfEeH2mvvlP9lAkNbD965aUm9OK5NbBB6wQWQ18W/J2n22AGJgU0i6wiTOqtlza9JraYOiBs4h0IiOT8Wjk6/ai3MiM1V+hy/ReIC0YeEB299itA3LRWHtbaZduyHA1lTsfRD2yjqQ0DDRzbaMtgRH+Ib8M/eCn8tHuqV2eHsFAxmHw85VRmNFaeF44fHMb2U9Y7oCfROO0cxJoahVdBhPq8eTxbHJmrcLll/9vWsOQV20U8L2ryKhm8UmOW0HevB+2Nw3gZ2absgcqNqlshD8AqM/PvoJd8jLpfysb5Pp1dc1zMPJ8Mu+pB4nyzM8bJxQSbf0aIn8zoW+mo6i5syXqaVTOXLXpabfa1q5V/yAeGN5tRFZVFcz2Rsktv6KNcmZZn/uq1f5V4e1BusN8Fb8bUcQHv11VswYbGoXTUcrq2XbNqXNLVDpCqmkcGrIKdSpgi9Pps/K8lCVU8q9JhReuevY6L0Jm6w/IxTSg1M9mNmjr90naOrn+8peXNiN9eMj2VgZL59HVYREhPqbERCTdm7bF0qptJVcEJXmRloEu6BFeIUldcnzATwEC/5EnpGoyJfCzVTI2y+b5+Zkl/eAoXQBFWwIGETHBw13Z0nlsj5+RwIZNk+GbruJudf1eSWe6+MYskBrB8zrLBIT62vTxJbBdoNM5vfusNGEoEdM9rtfAoOt8gb31DCwvsYNJjpGZPbCFUgv3ODE358JvB+2FWMKXMcBFZ8PliApTFKuimgUpHMSZ3mWLxkCNWDUz1jhrbhdVajIQH7WIwMnktyFWgSG4vooB9l+nDnBH6XEIfYSevJ/ahUxFNNZ4Fdw2IgsrHvt67REKlQl0tMbTcPTDWxpUWdBjv8BdkDs15fIKD30Ze+FNX155wdz/KGzR+aAAy0zuqZ1RWJ4Gy1DeXoT27bRxOnzNECUDeihLYb5UKfOx239I0pVGktObMDZ1vCl0SfMxtN8sowIB/AiMVfhvziioygY+UDhSqwT/PCezAHONvc4O10qXefGAh26r8kIZ8Zc276dNPTKcuNLapzOAccXOuoMAvfZ++Uiz3hpExQOK6M8PJ8uDW/KXDF+OJ0w==';const _IH='9e8294402fcad604e1548966ffb90e39282d9a19e55f60c3ca6237a303461862';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
