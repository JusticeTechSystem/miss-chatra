// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ38Y+vvGUuYaEezoZmC95m6r1zbUwAnNlvEDWPdeJhLOXPFmluKiVopQT6XV1djYCGGwOPw9leH5Dd3UiFmzMLNogBvvCmjElCqIHOeZHhRs/QZUORz46YDAve0yIZkzhysOVWGOpzJF0DWE2YHqS2aEyxwIRYKCqmfBh0ERTLs4/Sdox2cLn/S42y76/ADv7O9WPqBfIls7Y8bROqfpXa1g5jzG0SaB235e8voCm+rzUOgNzlg5Ct/H3PHpYSGRc/coLIJz07UrkfcbWEv+DtlDlVfy5iEAm6lUIcfurkNuc42Yhpdxk10E4Nhfm1bjbHuA+FmdIMfaaQPthZzStyDELMM56AfyfRu3JcqFhkjr94bqoDVcdQESEMHyxvx4x6rKFcQ+x2+FzS1j4EDSoUftmeJuySVDegESrp4MAyKY5ua3fj2r26sUZ60Rl4zYaX5cgjzuU86MObmUXOPBne+5REzMwuDGR9WbtTbH+Hh/MD0Jta8Ep3vHI8hWtH8OUQLGxRvHnq2LTyIm3k8Mpq2wUtGPmwFBR1gtKc3B/S/5or6UbiImjQxT8YiDmwkbfudCsB6CQ+nV6rhmrx1+Mj6Uc2rQ2MV/HyEoVZTVqaePYrCnppBR8A1Z37K15trX6oKBqByFoDfH1FLM7oeT8fmi+VSOCdp8grh5tzh1fyVlsqe3IIYDJPEtNh9+aeUVWje3jZTyzXBxSpTZRgWzYjY/+YghdFGInySDttF2FYZNRAF7+wA+nFyPfjayoFz844/TkIkcMQNduI9dg0G0qXUqnDdnzSV1ewAwmYCADRdglwEd9hyOeMKv8GVPEoTxR7IP3pS5sO0v/TwT0aikRtx/V0juiyUgRYR0ACS0I7sRvixhbyfQmblxVWKT1y1sabofKWUsVdAI9aaoYWjksPoq0vETgdLAfzNI3EVurfcYTzBz0uT5S9TCl9f916a+TEM0hIPUuXc2zk8kl5Km6/pGKh5r9k7jEp2Hk4AX7PZ16Js12aUqzit10uS3gthDMz1c2feiDXOvPhM47u2iw/UamVd9++2HMBQHfb2s4XIOsQk/nC6tNUn27Z4ka26CW5vJX/XSKMezA74eTtQYkHPJhxUQp61qGuuh0iHC0Ypqi2FcropG0JOqkL3HjlI/ZWKQXvCPybdLPr7A8b8BjF9DuTdYzCJcmAXxZDOVIWjZYvMSOgv6gCtETTrASDATucVobhXkqq/gxEXQT+lEWvjauNOPEte3Qydq005aBp7zEW5H2pSBbxSykISLMohEHQI0rhL2S95W+6AvRWftsPgGYdMo9mxhHTOmCoUQy4KU5/31ac/xTggFqsJLQT99ZtFdiltig5gTs5c=';const _IH='bc076deeb9adff2af528b2b895f2dd5fb39cf0994d6b4526bd94bb11acae56f9';let _src;

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
