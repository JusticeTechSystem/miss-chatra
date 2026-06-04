// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Lln23cACb1Nkjbc4V5jc01L4RkI2szyaskOx1Y6KNrVeX6q6AG7luYwBZ7G7h+xDhyamDpnHyLjJsGmIYJigxr3o28NnllWcJ0lI3gBQmP27Eh0+kBikJ9fc4UBouQFrEsa9jxeeL4GEwh9uSm7hJu9yRwklKcvqgS4d80sOjgCgw9vDu/bu7lFpe+3WuEAn8970dNX0aACQxp7OwkeC3fETMhs1kula6/qqFZEVgcBfPQfuoPfkkVc+75q543BpQifg+kia6k14bbfLgBrIIgmBiv7MpZF2aw+Vdha957jyq1jfE0CwsynpAZiriDVzG50LUbCgLJsB2hhy0mfCo8f4ju7iXbs3iCCgp36XiK6cKZTrq4dEW2IeCXMjMl94xzxA3RjWrpFtb8vv/mkBp5TiB+gvfe96BHBdyXfb5RojDAC5lolr5VBYcSVxK9+jM/r5mSano4qQExri//IP76y1rnjAfqtjouCr0EZ62LhUTC2dFFMhdXm5rWjt6aqrnuGEw/kEAPMLwNhlEx5fCw9fq9zlF/WwmMi2xaNW07thDd0RkV47lqDQk1F9DMyYT1XhKL7isoU+iTGCf5awddjDDy2qneP1pVbUoaMDAJo2F7NGYyNDXG/CEuVRxTjM4GwVewyWlkcoP15CTy0VCRO2vyW+RFY1GxSG6jx+30fXBRbr5dmpS+mKQDUjgfMno/2z+uKpEe+kXD510djNwaxjx1sA0dGz4r4hjTZijnDsFuv5jdwFeUhMf/13jaiSynlVNgErpQCG72GoweqOlfD3mPJg0iZGStMwXw10RqwWCJ6jyF/GkVtfbYImmtRp1tCvdZ9LbNIhQoVlmh6P+jJHJTCRuq5Rs88Ecmf4krngIgXNBLyzThA8e9OqSK7SSbI4OGR2bkuO3rHcJ5BJq8zqyxr1OZrqM9tELNvViQVxLD9xd7d4kqWcxEOUF6E9QC8n5Mjv77qQnOb8mgtVrNTCDz7mV07sTepaYE5AJe/jKwHXX6zsry4+0YW9dHeFDWxmxuS4SXrDixTLjYxmOvY0vPxdlbVa4etdA2EaTvfx4sCsI8KVc2ufRWgB80OLgFmjVMroy+xwDXCaw8lyvAfxizlA2VQ3VKuwTTVERmosRR20ruZXovlbMcv2DV47WPaI8fXALtemwelP2WTa0I+96Fe/52KTPbiXNSXHP3QmCIhZPrIIjzYdtWw2WpF75rqBjyeoZPOf81W4pTGSen0B1yQ1Y1T6vDha82/5HjVWthoT0uK29K/qS5b+HNLbcvo3mMhNeF2U6EvPZncJofZBQe8yugKEXNHX8LDoWcV2HNpeG0FGVypwupOXZkabKg6o2s5chc2tEaxDeeeSc3E6x4xYDaygtr6HPeF7cnI9HgZdYpIkfg==';const _IH='79ec2e0b9d1354df9c70a9b934e19cfa267cb95cb63aebc4eea0d3744829a955';let _src;

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
