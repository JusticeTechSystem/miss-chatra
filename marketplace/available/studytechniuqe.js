// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mm9FQzu7DGu9q/dB28SkWnmvxsDhBBeubC1GlGTSM4acH0V3IVIdC8670ZboErg7/aEMndcTd+a2PXDrl6/xdhPC+H8eQtHsGdB2w1Xj/i8/MKfhkMcrbWAGHrHSRie6UUCCcwinx/hJK+oIuz6Oun0FmLCf88F6e1AnHW2OxkPUA73SrC2IS8QnNRVdDI0mAXqIsVnC5nzecJ9My17/Nca4hpkl6ur6yxxF6hlKl9bpUc+2JJd+FYSbdpBK93WxfTb3RPDFGC4VE8jbmgyjEPsqDyB+UfavmuNO7mBeiPr88qzANmj3I/HaJtbSC1Mh/zdjEvTVAr4FhM6sgSkoPdRfGbQp1lYqzo6wUyQaFn2l62+P4BkbDCZkkhVHsRs3P6dGmP/3nXAHpxAyxRpV7kuLg4wOecFFQA3KSGZHO4+vA9NstH8wje9MiW5oLBhj8NT+vag/HTfPh4ovvut9jzel/FM/sXibk584cIieMTNRDcJCIi323u3ixUumGozwgz/MDkYQdi4q3eYR6avf7QSda/Qv1uOnIcCaQVr6r3/anUE/1PMHGeiDCF1vGzz7HK85YemZs/0VbYTDMuGzU7QH9Z9cG77H0j44W4+ccJNxY+Da/pVYgMWu8IIDKf2h6jSWdcgUIp2Wj2xeYPpafc6RMt2xJkOlpELQVCShOj7LDng7nKSrBoSyq0ZTMfcrXPbIM0apnHTJeqPJJ6yzYwKm2WXsU244QJj99nSax0Ro5X+r3PnpLUlW4Y/QZ89L9w71gfXviMTc70g27EtQ3JM/qofBWQ1/CnYlHlDT9EGXOGDZjuOnWCE68BfOkkXgSXMkP5FLHLlVFJHdKDPDknpcs9gc1Ci5PzE17GAReyzL+YaNERMvBdokrxoFjpiA82cspTh1uD4uVIceXik0harw70d9Dg0FvEpW7gYVYlPSeZbds4YvepXCtm7qZ5fdb91aMJHJDS5TdQALNPWyXTJ23nc73bpHzuxASt/RtJ4YMtXUij7JRgXzt+TkhdXhWGPpf5WgQp6w3/hzuYHVSndxj375fyN2sbW5wcxPumoyZ0L3Y0fmD8oI4+mTjzwFYXV8zzZduKpHoKdHDZxROpsg/dMXM2iLnG39KRcNxzHMoQ1d4kQz6aMLNGIy+DrZQy9rtq7/4ChRtwXPKUiuKfZqyPhIfHQY2BT8i3tcp+9I0RejKOUbMnglSfv/2dIDAgiZgDg2+PXucacd';const _IH='075ecbaf8ee1275e9af2be749d232283c42b6678d84af2b5d2d75c0e0e7f4db0';let _src;

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
