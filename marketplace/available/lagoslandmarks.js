// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2X4gcdemZROv3wZhqwiFnvBvI8qPYziCB5IGGTQaMd8CN4OD50TTcKotcuc4+9gmGAT+kgltBnXBOJjQBTvZ+fiwxjl6lMSesOUxClSmFkc6ElsMnUrhTmAY4j0ndrFeWmH5uh8PkSjOr1l3V8r/FVbFVdUTYdKBhp9oQqxa+utuKwzmHt7liDxe/wSNbulrEX10PAWqzyYtjThch5z7ADefxVLKQyAeeCyehHacUIrRTBBQeon8iRmUk6gnkFg6r53deecbtzCfFdxmU6br5oeUqgId0TxbbFdJ4iJsfM0Pq8nnJInxMHOTNaWZT+qKEdt/fUCsCe2MED0fjmJsTy7rz9bD2Ly/AYr9Bj5IZRmSfGYMfj8ZDlJ45Y3LI5cbjCP4JzEyn5UE2NZO/u5+NkQeWgyzA+YN5NWg3XGQysKYkb+4DpQAqswTsZv2p7x9LQmMGLFc++yGOyUpqqrnplAg5QnhPgCRMU9t55ZLEpPno7/TNUMG2e0PR1yyKXKdf+u5R2QMWdBnKESju/xe2YBiH+mNYia1oQ19yBurS+pSEjhU7v3VJHzc6P9F4zdhfm2mV/X3EI9uo9j6eJDSdWWSg05bXUWK1zp1BIvFJUSKBh5oZkjEnJlkrLXxLBPa1lMM2WV1EzAUKhnI+uXa8gZfFM3Ama4GRN1IQQP+GU8EPZvTpuiWANyBkvgXQpfxbkXJE8snlWx0jMjQjIXlxwqXXSNdANzmda5OXFzXn2TViV+RD0vn/eI/t672nvocD0gbyhRQwtcCr1LkEyMuBTjfKqGP6nUMXlJu18SMHNv1tBSXIMy3zxPCRmfnanSHM8BfuXYigCmQsgbZiLJ2MVefueMjd926PXGX8WXkdRheMEvVL1doOBhYyfUXxnV32w19JC/LosF+naXVkrGJOZcCGdarriSGXFAHzAZIpT1LJFtMlOXESJh0FOBorqDb+rVskDNLcw3IgCubB6iABeRGBjDiWz9SnH3fz0mPrgc1NQeuLdI4FgHD8fFez9b6iAUIp6bSHTV6WNNJk8fCeEs6n0twuN3AAqrwpB7r7r3MjSzqm/JIf47TNW36qgb6adoCYCIxDwiPqHFgQfe85coSk+sw8nwAAchRLiCpZ0uyt8txI0Z3w83NtFA1jQdJU3aCrHMoOs++RdFO8g2PeIR5gQZ4gRryY3e5kRVkEc6XNlLxWbpsciXvdoyC8oUa01U+na0bSwQ3ZS4SNA==';const _IH='92ea7eef2371d3331d5b7596f8f5ebea96fe21ec1cb9432b9e10bc638f542e07';let _src;

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
