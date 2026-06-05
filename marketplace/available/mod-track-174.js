// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fxFy1UUU0GU2kOn7k0ZmzTnuVW8ZZd62vgQWWMA+xHxpjlHpxDVcW66BPGN6TpnJw1J+0/QgfzEWtwMUkJBwxOJPl2hmQ0kTd2VRve7Z5qCZjogzf+DyLVBkDHdRdirYzLjNPDF7DmkcuXt8EQYYMAerAH+VtK5SM4B2NuSm5seCUFC30oGeJqZjfiONCW7vKmVqipMhtxElN2vEEzl6PmEtu7eB9U97dk6wBksxN0xzqmTBpV8dsxVhbTgMOQDzij7YKIinFT32z1u10TCzfGGGK3lUMKot9DPCa/Gsb2IIHSb+v+Opj4Me2mJdXynY/8wmGjN3ib7kKUdCfE1bPO5rrR31T/cPm9erraFPVAIwaIC5JEQagL1l8dJNTYLdkRqPPzUcKNGKa7ofgmlRusyGI0bnZr1JM72u88Ryo39mSxnUK60yQQeU/UWcfYBqLSp//7l58osqHo0pvACbjHxlCn1qPDFHnp0BQc3OnMyoHhk/Lr16zA/dFAipqN1U2HvYXW+Cmp1DZsfHlNtXZ2wxfWMyS13AHZ3xWiVcX/P9Uhpelctk5zL9HKRfyC+kA3w/0n/1becJFXjPOl6vxe/CmLIyM5SBQlsqtMIein0Jj5DPoS6CkR+DVME4dgZHDKsrnhF3bQL7q1A9PbM6rSaMZOHC5dP2FmExmaRjo99w2XxDIzBg00pq5rzer35nq1Wvqs6o5iAn/Do+ki/Xex/+HCJyBqtPwr7mLdawRTPNV9mEpGVpk+3WyeGKw+yqBPldEFJoyOonoYYEPC9Z2A1pHgnbrtpn35PHoqkjRIil/fr87wCpIfv4s6eB/gtJ3q5xgXbgfYqcxOyk+EmQrIYCPuwWoZ+a2/BMQ/VRZ9ARTiMRg4rxngJX3Reusl81Gsp1KfrannZ2u7dspfZT4ryR0soNUDALpGQZFx7buR+UBy7kior6OcAD/TvQrih6HgRjF8q0kb/Z4SuPMgdJj+tNRSaYecB49zsN2GG1Wp+rn4uIzEfDMdvMv1q7gEPAjICO7SFBY700OANo9JrGICCHBYxfrE1eJpbxfTHwZa6n62NyFJqZahFi/IisBgjD+IJFqNa6PyvqSXLRfb/Gv7BE31cFtk6evEwSkSCSSPuZ6XSDIXiGz3Tof7j0MbsVFlHujx+cdesGq/fu7n9TetUtfwWNor0uu/+pVj9obfKRKUgPSX7JrSq3gzxp8Pr9TfoyrlDwuMPEJYaLHc0pVBsYNpcHj/0GDh37PlEM0bGy89Hl3Sg+JIfgfR9I0KRbQdRA4ifR4TD6PY5tuuXUPc9tfAkr6xBACIgNQtO1LrQNYfVSdHdGcReBmYYzio325b1RfRqtLEBXEnvBOBmumAofFeWCfhDHojKmklbp';const _IH='fd68bf3e7a81f4e9534628bb98e8f69c4265ee7bd424259867878df1f225552d';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
