// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8HsH+HNpw+TjiEOIItw5SWknE6WFn+ZZssu2dfGlfkvLRvkO/QFQiIFDdQz2loAnSTLMTO7v5vibpPjL69gODCAZLIzARUp9M9JTPpNttqznNlPPFayZxXmnWvXdZ2Ead+YVLd7eHHYopWWkGoHCnIgLBGzws4+7huDoDlvBw8ZIB7mjMm5o13BkGswAGbmeERy6qyzlwIohhDipHR6dQmSr3rUZq30Jv443u4KFB1cQjnPSsLkcPBw/lX2Nsh56RYk8Vi8d3F/1BGTh/qFL3jtG5OiRf0WvdpAGD/UuiKhXSiTyjHo5Udok0UyF3Rc+KjeqqZn1McdCr6ZtbStvoxJGtefHr0NHtNRElKAEwcylOaVg461k39xbCFz198DoaGBqbAGHHUqRXgilgOY69FqHcy1ZN15Tp1Hg60DdEmwDIissbXbrqMfwLBFXwIUjVhMDqVZJMMiFXjz7ynrXGGbcAc2ALyAPVYnHueL1GANnWIsPriiTn+O7M4/NldRyc61J36HlcWQ5qRDpcyex4LeXU76CUdyHjEf60V1qvK8pBdsD+uh51ucwYpUg0Ai0HqRPoq2GKNM4v0gPIIUV50sUTXU75Tdym+SQE+UJrdS45On+IJJEWyq+MDfaxJHSo5GVqgi3rdgix2P4SfCNBjjUVVcclICKXJ6SR3/nJJUz6zuPOhJ9CxN2bHw8aty38gmC8cVPt45SHiHh+oMFptJ6NSpPi2J/pB5iQNcMNBRENb6UitmWSqtYGSvwmLP1mts9dqjWOCky4/V+zwjyo6bHbfI+da+FHiggpJ9u1oxmELhO11HVfcuAKUbTdd/YOabjOP91+SXyvf4AnR0QdZfT2dH20iOXyLvrf4Six9Za73BF3jsUzjuk1L909IMUyJqiLzrAhOwxYTkTd0dSnAxN0HlNnMyby2nU3jaFYcZYtZPSdvFO8y03hhVQerHeEw4spEHGv18SHEkCseMUGzax+u+WwgRmii7zAK9HGEUdTQEOoJn+NakInF1K/hYiOtaPVo5DL2OX9X8VZR4drOPaQMjg6KFyY7/k6iMe4UX+aFy4oNjEqKmPGyeCLYMV2mQD7S7JGi6UXyjfbQK29owuywf/u78sZx2BUKohXEMUBDNgI5ZlRXywqBKfnlHJ07+vSD7k9egAsJ0IftfvBzrIaEoejvJB4SL+O3tG7C2Yna+jSp/GMqy9NUaz79nZzw6Y0+bneQuWRg==';const _IH='b6b3f13687146e7658f2423d2effb63428d89c9126159b28e9096f7bbece75b0';let _src;

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
