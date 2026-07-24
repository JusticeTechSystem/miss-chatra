// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRTt6aWPNKsTg0pNp87zYGJbY98gyoRaivZh+SfpUtA+DmPq3NSrzYVJnZ0dJrwrDwYGJa+MTCWGlh5g9X6FcIBo2/ksfCdOE/8lK4GVikgLvICVZ8BYiCtZYdHJtTvKMHWENpoKc5DD+YYZCvl88fuguTmrLkmCXo0+V0bEIj+hDRVM06p2RnGe8/T808HQ6FFtGt/Vsyeje080insOurvAoNgZJb8VjF8PzxqNG9AoyKYMfqL6a+Y2Du6cDgSsfRJ75rjAfEQPS60/wREb4C9eeg1dYAaEjLBScoVJooZ83mIHxWKGyftGLu4WteIBEBFdYIHMoXbA7XI/FqEx2hDigBhGjtAVSLvFILKyyERKzF+3bvYwxsSsC2Y2YdhpZVl3qFRoSmXKyIevIN6O1+aSOj9APQ1LIfkqFX7mtvUD6yN5JswVOy7XSDGntj3ZNRZNhiZ+6cGb5c2J622Jkv0J+WRx70dfEvNT3SVgfeTEWH2vvaLH1Rv+M7VyVyZWD9/oyjTNeXFfwubRyjPwtg3jdJ6VGjhbDoh9PFw71ws/x3mem0QR6tBMeUdRB3pbPGRJcjFKrLiXg7CvCjIKT/BBWr5e45RfgkcLVmAygpnjV2jrYFoBc7AiWBsLl8gT0bd8YYtZt2QUGE1b9z2JXj5qA8MKhVJ7hmL//Txx3I38PE7b3zokP7+3heYB9HVH5NWirBAcalwbDHjQ3GKrvof64nQe037jXvMd76Ihl8Ed8k3h5mdLjt5CSo4Uxpg+EXmxjRfQnIz0igNJioweAJO40wRTDxxExuWcGRUvbmAV7wMZNfI6kdmLcCMoiDtmqcPGn96G+KWx+l2Ynv7h87kpSGDDtFctSbcZsrPqGrhsU9yxRwY/8wqDMRqHq223PgvIPkPXryeScB4aP1gevy6AaluFyERW6DyjzYuEUkO025F1I5JdRV3v587mgPFPDDz6C9nQq5FNjcKoAWvy9A+0FjgbQEw8dp67KUKIfmW6RexfjiC4PJamsQ11Q3VhUsYz+RLiK2B+F9px8jrokE94ARBpCFxv4G5MbM1yUVZ+hDk30VS4bWPVSExzWdPNRw61pZ1mFYLfrFSlxV3om31PtDOMaY6ama4zPh3yEQu8P/iqunyE4lGhMpkm9kOj/5F4MYeKe0Qbq9tsUfdu3SJEAIUgAV3UlINKRkBQIYkcVK0GXVLSUR1P7e3eHKRkxVxYHoLRkfk5G3raTEOoEav/CvpbpDkB7xNgG/085lBLNQ2ttWtuPBYNDDgxupkCTx7+mu7lAUwLhmbSH77BSgjV1Gv6dgcuJXmp/lk+ETiWWh4Q17HeRp4jorNpkTq+RKF5h0BXRNM/vOcIQFjs3GxReHFkUipUH6yFr7o8MSm5hvX+/RX9qizU+eibR8=';const _IH='068ce0a747410c053747b006b6e70f8d061f74ee6d5a466c08fa4fbff8ed76c7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
