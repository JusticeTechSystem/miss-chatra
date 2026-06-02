// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='74yfeizdtQRX/AZIFzwvgoNk/l0mSVMSeNRwQ67meUsRaw766OMbw/+Jm7HiAM18d2UwaDYyU/oYekG+HrxMYeApYDrKzP4SZD2MVJNXpC/kH92Aw/c7Yv4zV6x780I2HSssszUoYlG/1AXrcu+DJyZ1RTFvDStid3j5JO1H+A2iXMOoSh11oFRXrBx0sDTqan2vpvoN+nSK1kw/CKPz4e6Tt1IvJLtiWGxWIvcNObRNUlsOt0bMeRKgJxeT8zBaY/6STtPCVb/mBS/74UxcgXX807AB8rgmUIXJy7O7FvUwv3lYnlTPJf0x4eUJ3RPcFc++sHNTuSQW5PuBm7CQndv4Ok0Ki8qVqTFZKUigc8+RKmqXeZgqOU11cVivIHkkNLMS2R/voUi00V+XaYs1ezx415G1D4rgtNss1M+f3x3znpE+dLPhjZl3FcFXM89c/CWYnTWNF1j2GtGCJZFcAsylfENAQl3AlcSpZOk+WduRDwo8BKLWCZ2a7lyc0U0kHkxDUNrSdbcNgTqrjY/w90JDhZWkQ5d/SGnFdNKdimYyLCvOUaO051Mr1RsbQ9154w5blQY8RiHTtsUWO/oeWnQEbu5hDbxkJsz7EcDAFlQi629wZLj0sLOZe/Q5tKWRWlW9YTd26Zjh65l6T5lSw1T1L8OwH1DiyzwowavOxEYDADy/4Irvl2oYDelo1SBm0jAxOtIH3TP1GIJeVzx1L4Ndjirj3C0UyIQDv9OlIe0WqYUEn8fPKE/J7tGV4uiu1Hdq+3VSAAAj5k2vWAzeVN3YE7FMMjvMeOmjJGFBZXQpz4Nt/451R4WrpgxxvBdWbsAToueNHHUqSrCUrj/PXAPuqFhyYLN1+nwBWX+p4I7OMywXtxqrSWGSJ6c6xHqKS1pxHzlXoQ34pq/qPZojaUlt0T9WPx6cMxI//qUorcrUuiEeCa5/LQbG0LLQaEwq59UvGjOavqyLAqlFronqvLOP4jn8bQ6m13J65qFgjun2oQKnUgQ/ihzBPG6VSU4ybbxTAlmZ5Rp2jwcTr221dws1bgsQ8b3F+PpnLkaz1uc4KvdXx0CAtMWi2ci8AjBkRbLEFn+z0mA4oj3ZnsMSEncGp9Z/jTx0gXPUiiZEYnkAKrDLsJt1rw+8qnenf/kmbybdHYL4DbTq7MO52ZTgCO08Fgg+l/UTorR8kVRvhaSj5lVudSAjWMJrjVJdslViP7mD3XkWy0BCwWcNjxEvOCtk5ttygNcbyxmlI/7PDdocTXoJ9sfzWNgEMGnPo4tBiHmmQSSw3AkZ+nRzrNixsW/U3qLWTF+KYLeyDJbERU4bFQ1juS+97SV3tk0wAYpsthwZYwNDXXwvNbCzqQBkgRCzfrcoUY6xrwCx5ENyvARESek5pjNVUcRtb0fU5y/RUeK//H+lBdtzXPqQ5tSnNpLBaihUhd85IRThUa0Si4F8p4ZDCsg288ydZF9vOckD0lMIk7CILYSBKOy7UFRE/MDu/izpH12yu2HfISIpPkgI8QEpY0AigK4Loqdcpt18TKsfEy2yq3Ray7znwPCxlzs2pJieS87g8iaP9FCjG8eVXM57+UxM2qqCmo+20dUanAiNMl1KR76RRA==';const _IH='0e7815901595ca9f20c03c6b2a46618a4df667cb0ac80307be9cd4c8f931d3c9';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
