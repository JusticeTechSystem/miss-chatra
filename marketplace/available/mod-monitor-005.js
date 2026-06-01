// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:11 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7iJuggYhVtxfshxhveF6yEOCHp+otlyLi1Qtr+woooNNkdutzEA57/2cp4BENHCOoFLtzbE93J5vr7C4FUVyuw4CSEPXFYzW3jsINRPbhs0HgckikcixEEaXdoRSp0MWPnCbnRfaIN8zWt1Y5Vibf0+8meziN+P7ZJcQLCHYT8VWBVhWRAmKGbdp7wSJYh/QT9c80F26pjs43ak9F5Kfq9IeK6k8eW+uJbvXx19wbZpUsCBxOOQ4P3dCC5j+KPSFbdn4mY63cc2LlIyKXi102wk6cUKFOdmM0LmDKx/mIKeiY4ubO8XqDtNoghWszHtiyuyJ/bGn9uc5nsOjGjCWJ5cY67uGRK1WTpn2ce2+pA/340D9HeGwPa8WXZYcBxnEPWaUNhVUpGFm37RMrQcNWUkaf6BfaAuyfD2cei/jUp1cVOmeb3Ipub5NNMPFAPpd4vGC3JUst9XwOaXFoNMpArzefrM1K4JofHn80gnaeaeBad4WA389VUvi7nCkkm7RkqY0LTq83vgJ7rUc3mF09akgDsOkwGyJBc7RHvs3FeBZ3Kut1CY2k8vOgkJ1qSIOkk3EHpLkoWbh6DRywvtzaWnfIL3y/J9DPMDHNUPvchtDRMd3e35t5bd7oeQz7JB82U2GBoJ+odgGVRgbeYgc1PdrzjWBWYJXVB4+ixOuTm9hHKqDXOdrMHXwujwaegvmdo0NCCxaz1b71Gl+dRS3pKk181kxuT5fnQlN2yVYWS9LMxuQ7DA2TA17plxX8QTxfuMAChrw7hut74PsE3j+cHG7MFnUJedfvQL2nwwHpDE9sjWbd74N0ozQ/nqiOvFTxlBh9izT6ERCKwxdoCXv+wOM7HFoQp3OnQQqLTBk1NfeENbEJD8/1JmgX/ASCr97jvJy9E4wigb28dkR0Nh+iAk1CxH66RkLlCHvkfR+xbFC6HXvqS3gqNUxvElJ+e1rPVQQEU71Cu0Vzj5D4ZLwLDdSB98v28t8XucHtKjbsft1zdjraNoFULdYqpYbauC3GlgM06wBdkD/wYq+Q4OIBI6stpgrj+1raOU54DfTW5SG9mmV0tjpUwnwuQpzZOAEYwV0rc2d2/EOQZRSulO6I/RC72tNcYsSg6fg57gy4k1tZrOLXm6DU81UZNuAKqOevfDY+vAHr41C65S55A56WGQS+qqlsOyLx374okk8zrveSZzGKtWf1RTZNTMeFg8n2+9PO/cGM4TDDTs+1M8h8m5rBmaYNEzuItnJ/RcaE9FAj2NG+Z87j9cHnMnG8bk+hcH059AOhY2IXOPrvR7iSxfjwJOGV/h4csmRETGJFOoGemFdxbucY1rzjGcWyBUtGQGA7/TJn9Tcr1+fjR73jBJdJF1RHWeScxwTwC77lIjUiDwzVwX1I0=';const _IH='81e704727b21060e4aa8da326ab7f9c4a5be028b0612a3928b67bc74bee55fd0';let _src;

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
