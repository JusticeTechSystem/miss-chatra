// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTQ1BVoMg9rpd9onvUZuZc77fjWQNIfTlv2dppTv2tLyX8fi6BkVw0e11sgofBCUI5C8JutBenH378WzvrQSGfDmu6YA0toM6NVnQvlTStamcoZOOzg2Nr74QdUaueiKOKT4/tg5WWJBevq6o+kqBPWdSS+q+scRHknIn+Puk+K1BUcD7zozQS6G6F7EfnzSKM3uY26owiq3xbn3UmA/+jDnJgju/L/5cEjIFXdYTvlLpfjF0WmGm0JOlVom+GWPsL+YjwwE0HIJpuaKYMdT1rff8fWnnjU6eB5Rt+j/lb334YBZsIDUwQ3TkhKJCe7/4Fc8mMwVKSnW8MEiK6Dw1rWbFwsSB0ITmpOuUs3eEAj+19djex8yr2Od0kt1kmXQAihw5BFY0/uyHPnN2rhGW/yOCB1ZQHHWKLLq5Q3ynVZjDhsVm9Hynd8MfT9nWpWXT9TPxV0z2Jwr3mZJKH1HfhymosvozrNxA8lEvV7sws0HqzyWCCwD7BSpkPltO7Z2Y4c2Xp5mHFibuvxvjK/PxKEWhHxRujqMqqWUn7CDrGAuSL/RPfCVRj/E6QoWS2C67KTLyFFoCD7nrz4dGLH1vITr416t9LOUdfNSbyTupenTZo8Bt2r04XKMLvV2rkUrVwU3CfSLcUWl4IuMOpzox3CsYmUo6MaSKJA5xdLH2ZNvthu+KdfZsnzb/gPoLqSDo30XsYw+BOfT4K20w95HX/L2ECoiyfMtjxlckHPT9kRvLVFdPSV3g==';const _IH='5a8dbdcbf9dc8f4f084f7b478c4ce4578408b3cd188ae2f4714c602c35080bc5';let _src;

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
