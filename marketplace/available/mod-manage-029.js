// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o3rT37HpYBTaa2YT1q63A8jz6iIa4E96mXpk6ZxAPxC3jOY/dMCRsdZYlzXk9tFmhbpuC2PjL9wnRsrjOsRvE9+9OYmiVFc6VyL25GMflkJvBjoaw3QBkdhxaPUI3FrySvWw+Ustah9gKgJfi6ErSZn2FGVkUA1aVmu9ZW9ynqKbkqvMSAWdy5M3fYjHhLYm1agvxfAEWJ8UiQvf1kc2/64GLroCna+EMmCpg/lT7zHvVaehw2OP8IBH2+NMbM+fOOA5TLAl5xTiY6WiBXov2bLbnkl6+QSD8TPvduiQwr1RwyezlIl0Cu4rT+7u7EqHEuftaUMXAOQv4UkESgSs3lufyKDG6vcJUvBHLkXzBZcrNXlTS7SGRQ5P0PywFytc/NTrcdyU2rgv7NEn6NBlKO2e9LCr6RAICW1BNwx697f7k1L5KPfAF88YF7VDo8v4oDGk3vB8Y2xNzsup0xdPv6MSbSjya9hx7YTGyrqJatfrjxcUw8b2d9HOC/qusJe5f3R/9bhkzFcJwKVMmVX3uQ4jKFSsXntHyxfh2BFpsMH9JD02xYc/+jBRa6DvAj8e76fy6yfCSFzApx23iPlZOAYuSPnUT8agE/MZXxkfP1a/9OFJ5om8eUDF5XAgOMWzMWQ3ngFcPkU7eJnlB2soiIpGTiFzlK+4Xytwcmvk/7MHF6ip9NH9kDjPtcH7bQCk5wWq3mNOBkKw1WJbPq1ZQcn+UsveL8Ef9NXB8OgsnWkNRig+pCch8/9NbkvboETQ3fBnkb3jjDzp+XaAT/f8I9nADOMgrLy8zpxJLq/+YjsA8yIjEqz5/HtQ/wdabVgRGQLANsDjVebDmXbB+TFFzA4BMIYhDz6/OuEwkdehfHtbCYnJaSMTYieThjhl1u33U8PLiq0qS1giop5O8r8LhjD61cNiuHVcJKjSr/895UYgAyyEHzdHfXBVVRCAG5Sz3TEMfJ4OgncBxABZYphJ/1iU+ynA6tGZ59DgfZV6rZytRNnADQA8NfttqvQt4hKDRRTi5i2X/+IAk++UvqU8ZeHjxddVAqryMG3YlQzWrBbq5gZgzoIbtdT93ntHLaU/Tbqf3bOdi1JOslKLMvRrEqScnseCMjghoCT+cKtuja23RIav+Yrt5Ogb9QCVlSvPq5j+1dEE53E222yu+BD22ZFMFxCiswHXP8Na7e/mffQ8ezBw5Z1p3xBsr4k2/YreVemBog+rw00KVJNS228MzCaRctlo6xadwggI3rqehCjeb6T35GcD2bS90S3ypwHJWA8k70ivmMuo86ryMVnWzvqGmXifbAfa1lQDJc7AyNo0hIgpbgd+PuGCpVm3LpI6Mnwx17dwOPzGuaR1i+VrfhyIYIDJX61qDehy5OuwYQ1h+rk=';const _IH='2435a7d9d051adb5535609180d398e8ce306745aaddcb107c5db69ba163f0a45';let _src;

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
