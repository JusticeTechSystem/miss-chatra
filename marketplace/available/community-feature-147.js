// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YFVJwjwFuwnJ8O7AMmrH7AGg36psazj2VdyUeTxQERBy28MKJp4Abu6ffxL4m2p7ZJlfosEEVpItX+xxDgIXPbAJs4wNEQLjrhnTl3juLt77Nf9XyzPNsCmr0RXIeMmLrxc7USgqY/Ggq816q3swK661kmN1WuFrREst7lbs04SAq1cmAqzvSV89tF01sfgGL6LmDkWRE5ywlE1liV1D9WAd+ULkLUyxWPhiHWyE3NeAebzqr/65vmZmZuLgAe2CoXIX0KdrLoPrHqyXwEFgte9LkVM5a6BpJhMOpMqdEmHIgDilc77U6Q7s1mePwjQouxL5MGR6DGKpIo02TK2sLkVuO0mo0qVg9y/XZ66PSmHWBTlBNX4NwpIpdRrUDmN7uF/J5AvqL2DKcTIjd8lroVsB1DgDFTSTiEoP2ai8ZsCPzLmkaLhaMQCq+C0i0NnR3vNI+7Xb3sH3GtnWHu4hMyNd8YwWB5FrEjaVckD9PdtcM6yS7dW3Gy83liNwe8/3S0lP9jMhZwo6TkByz0SsD7x8Kzf/EEpYG2urLidJgsMBYw0WQF0cVF240r7eT3NHJcPMBSJ6bdzB2XGEPMW5LOwCpwCQj1TP4iI/VQE2eZ46jpbmm8aCSyy9p84MDKQ7VSDbxbmV9vML4MATPPpwZlA7cDtwM+orl9HEQyJp0uhKTet8MESJhOL3Y1bwApIr4bVHKFQMLOaxWru/WTil1KOdDcXJg+L0j/W2u7d7ZLIHtm8=';const _IH='e56f716173ae03362d8255deedc7da5607aec4730b3e096bb85865aaeaf2fb4a';let _src;

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
