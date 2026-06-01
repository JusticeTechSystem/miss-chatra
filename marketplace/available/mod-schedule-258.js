// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4YDP25kqY9MWIb9jQueVc8M9l0tQzRYGnHoJmuRBzN/SPDulfiuAacx2X+STTXpx4aQoLSgH8++Z86cASbQiRfNIGmAIDnJZ9jl81qUh2YpjT1MKSq7m/5n3F4KagLIKP//Iy3U9EPVW9PJse4/M+ngSwtVW92Wq2kdpv5Fgp5dgme06m2oEtTtsd5hclOWff3WrjvmGkn90yqe006r0r2DykHowRxGuZOpUKmuJvJ+7yse4cvqxTuv2AeeILoJHwKdzdqB1CRt6TjRQF0nhJtfOIYMXseEBK8i9fHOVlXEb3Eva0lkCgfUw7Robxjx7WmHkWq7/RDAo1y883hLCaWhI/ukEVNAz9BlioUBK9Z/jcrGznyEgC9WOGwoAcCAkFxjFa8RYsWPoQmVn/4euaKjg0hbcklzjwNHLAk9NKf+szq1rhUff3UlLmaqbAzBfadnt2gX4llCNp8hccL5m3xOnOAhhoDdch8nr7Z/VjJNyRnUCfoN5lwkypYL6zdWyQuhrfGtnhCwVmGgvGorrku+/XaA6hLSL6c+swgYNXIy0IpDefKRy+B7XbzzrzTmuTqf42CHhsZidbtkipXR9T/gCw4NVG0P86TlKmC1v/twe/cBkTkul3HxfrY0HWmhwHm+fq8B8ZutCc8mZBWE86S0Ux6GGAd4VulEy9i/3vEqyfk7nAjPDvbQ816Obo/4Mk5Q4eExhtesLGafEd9UtEKZfEEDdie0D17beyMNJ2R5/uwcSEbz4wfpXrjxrUPZmfKOXbPCOKTO8cirEm2Uywn5YspHdE+ghuxojne3opdzO//otcVJGO5ByjDHsTjPvByPPkgX5CFx3waonRNiUsNej/8yF3crcN3+6TTFy6eMHbBjNstOg76/iJjYzs6CiY0VsczuBspyiOEz2/QOxQyKiBjcYBjUFVZ/M63uwAAiIZAcVk8lX2u5VIjRjFIW8xlqstopdvxepqrxYhYSsgBYA3CiNYswn9MMVV/y7Xn5aWCqd2kSdheYslh7jCtxg1rbrrMu3WorvXBOfSQ9fs8PQrCXhVdoDY+HeqYbH4BsTKp659YM4A9ddNvart82UlX9puN580kg4g4ABI++QyoLu9Wca3QJ3Q1UxgChb+dzinhFC2r1wQEAHdzqXLC71pyk9G8x3duVWdO1rDQJ5jla52u8rthL6rMvBGfICKi+v99cLDt0NMggsZg9QuRoySJ6TpYPcawOAwHzlosJhSFsetGCoZMRHUPpSdFLV/3Mwp2HahWjxbSCCckJhoHnzK0SVtgSipLO3yKYZgMdJjVFioFtzrfsohSUxkPayBXw1yZSWNkUB5wJz30CrJup1ib4p+7LHpvP8IZkThDNleHkJwalDE7aPS6QQUqrNmcHQKudGtokHNvIaQwnDxlru+qLli/HOaHtAHlGeg==';const _IH='e7401a9cf1755a7ada1bf705e4b6be8ae4e39c52f7b41ecefb09f59d0250dea5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
