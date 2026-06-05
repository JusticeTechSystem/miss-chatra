// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XCxbx0PqiVoX5YPGSiOpoCxahzNCPiIW54ZGRR/AKKeD+X8esY/yATnbB/+Td9ZNcga1zIuBZLRH7F0+j2BC8w4PhOaPkrXyUpI6mbB9JV+VKOruF+VjLQ4QF72mbf/yKHeLOV8epERMMUhtiqsl9bRmm5G7vCKk2KXmvWzoVw9G2+keKVDG47MwwIL3fENFOaQQhtxUTCda0YmLZm15PIpV0rJcti501swF5z+wrq9XshaBZdoN3F7OQ5SZQ5UirSTk+7UP0cOc5NpEogdZG4BuCIsKj4llqUYvdNhV8x3Nh8r2TiiWE/LvoCxUuG7G6162eMoTVkX9FHsU5bZWr0lLoLeU5g31IoKIVA0xlB4oLTjQimz4YCpsyeDZvqOlG4fPjj3540RjNdWri1eG9PmlayaWpdtimXtzLUT1d4YiSsQdtxGeu03CvB+JiNWN/yA5kdZQ//WV6n9ibjbEzlI7KtgpLzNAi8gv9gw0MOBU2ai8YHFJDnMrae0Fhhnjzt0KKD1/v7jeVyJrZRgFHWws0k2o5T5S3CRslaLs+Zt4ExR8uaJw0Axq0u8wr6b74HepkeTdEGDFHaogCdSA77sGILbDc/9hfYQQAL+w0U8vZKg3JIbAZg9uUMRQwB9wzS/WBNavmhamC5VeVWUBuY/+U1VCdcJ1DpkOzclE6VTJhR3LnG6hKNDwjb1g/WglHciKEk9oEGoeEfOWDoNnmSLwO/kMC3Md87GobuW+Mh6bLgKjx+kEyo3H3kFt0oqMbxVgoyFLZjeFG+iyS3GQ4Rp/Kf8hm+XsoZOFRF7PAi4il18MkWeiI6JXy6zyAkPEPeTd9TbI+1chxWFUR1XE4yoE0/oZyi56+kmEc4N+xqPobFPvqeSjYX63Zkos3LrhpZfG48GL20sYy5gTgsFC5AD1320nKOoNB5+QDK/fQojG1jB7bFy6hH94kKSVu59mdTjgPLIRbRjAisXQSe7OM8qghSoDhdEcIi8QpLIKBui4Kc8rYb8uH6bZJi6/L2pxBqGrgeoWEOU=';const _IH='4a5b7c143f1d07ba20efc59b7d0982839818062227ec2afaa60e7bc758925237';let _src;

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
