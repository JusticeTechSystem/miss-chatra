// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NPzhgUlfMH4hlrAC8cizsXRZluXsITCVoIpmW2Z0STsDFq8xufUatj0t7XWYlLbF7Z3GB6x7lAZcB47yA3+YpZgoTzJUCXK1bIU8zYHf1YhMjjnmq3ze6dwh2JcyZdLy2AhcpB5D/41TuhTNfEIDN7opehPPq13+0TgiVcKoT2cWuFA5Mmg/ykrOgLNa4nxl1QAb/ZDN5KFQ5V5uJiesTolFz2EGMz8QNpJrwXpNI/mI2i4aUUNsuanHZKIOX414VUvNy/ai1nlcKD503v1inoHN6HP92tvE6hmKZIMfoe26+TnNAkJz/mAYRkIJxvkcLGTd8Nc4+pNnSjef5avsca1z6GLHAzElqqn+UfNAWJp3qRrhmbp4GKCUYogJHvJ6jZPxjwZ2ApTRIchUrqR+tHGghN+ZCPDHvhnWGKWMPPnBnW5mbHmPZHnz9p8m9nTMJ7ayEBXpaXRXG7KlSpNUYlaYyse+oYpm2nROjvEigJt27c9hiQrpGcAXDMb64k0nL0bJXdBNYo0V+YY/z3SuMfHKDVv/asWuNwvt4TtzilKFWNWyAGXL1Sn8WIOSbTqOV/njrSTRzf1xL2484/rrIOAcQuBIIweExS1FRZVuoo5ix0HDFLQhlBSVzO4XNCIz9pOZrO9NWKQaLAy0U+7luFN8DhQ2Y2pgNbp8OrqiXud6pHGkLUdfMN15WjibAMph5cytUwQdygoXP+ff1+Zh7uWzXlUBt4J4R3dulysAtgzp7hyfiyJy7tkzEvqvI+5lNFS8ZucQmsMpe2NQ/r8ufNiRZUvwIUQCV6SQdHEvWI4YFmXICAkeC/a2fVoHt6hgqITXFgVVpAOjT6ts6N4iPQ0XaWp69GPONbmi4k5Wtc2xDhwljNGibP0vgvPtWBh5sMVgINFGn4YjT66UA/fhPCbxqw6ob7MXABoVCvYX13c3x6jvXdN1snjX1EPyiVFQkaBHOTysWk8THmpz3XsGUjbF9Ib3pt6xOYfRst2Y6WUh1mTG/0iylN35v4/qmlHmsyEQu7xbZH02Xf+gZOn0vdanIvazXr8QLVGiEJSuytShJ9BxpYJ55IzxpGIHSapEjN98bJrsdCB35OO9Nfz/1Mb7xZWRksKj3P1YmQIdyHMWeZpmWc9qYX2lmTjWkJiPAqm/x1t4u0LPfe3dsG7aFbvnHuQezq0M4nroW4jgUN6lqXJSixw0/vwL6Xu1wqYxDSvsI4G1w+MlGoAfO3A6P2JBXr/rhgK+wV9CGieyrhjyJDUgoV4+Nd2kMaNT642WvQJQqRAK3B/+gWq+efcoZ+uCMqNgAKuxRiWl2J8cDqaJf5wQJ/AftQWUTopblOhE45oiIz6cQKJ4ccJY974nJqi++aVV6FZNPoRN4yVEv4efPfGuy7gDjg==';const _IH='5f27bf931f3d3faf9e527b509be047c1e68a49b36913704dbf73d7795c4b5f99';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
