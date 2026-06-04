// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/G3CfayvSFmBvApySVCxAmNKPQ2uS4kDtn09eclMKExLjOjNx7OBXifWvpBj4kppYFk2jloRq1Yjysn+/Q+PngPbRuySbACM23Yw9hndjzwh0Mq8iqTRRHmRp+TcOI4lynCCu0LKgGlHnDGyNv7Qbw2C6EKlYCqXcGh/I86KUO99VSXDk2IEMUBinyBqvaVn0qhWqUE+rjRnH3f29JS8sAPrfVVay3xxUp1EhXU8yY21LYKWpxlgDQAw6Ke8kXiZnAosQAF8Ln9VRIUxQX1bRm6JLa76SxNOtSLV8DRuGrYdi9TuLfgkRtJVJBRvJr9ZHraHcAlSmoh6gSYxFln8WU+HN3hayw+sXJiCFPQt1fAXZnCEhv6Pk0Lj2FxYHgU1W3UPt7doxRmsf1j7AeLELrnCfK5m4c1fCSG6rM5eC38H3HuNwWnDXdgx0YM/6+1DYqobAzs2V0bKFZThvr6OdlxgWas6StSIOhIMeP8X0G/330VlDNQtGhK/nln+CAYs9g5GwmbYk4DoCRdbVpMmB5zztbggxU7fMWJFIxM9oG5fwRNNtJ1ut61AFG2V1J9Ixk5SLYQLD8Im+vqhBnIfCE0cIXAaJ25NFOjxYN02+GRTz0rfOjDRPQklMVQ6VWyLJReQcC4zpup7LJqeYu1w+Idt1AJ7A5PM393gu3dVXOfvaFIXfKsBYqAzu1QmSYBJ+XTSJuNTHad761NzE35pD7npA5qj/Q3gB5WPVJ3mnz4RORWQFoiRQmveiw6cS8RZWH5AhobvKvRvfnZE11hUKRzdzZTvVzVeIHz/WJGZ/fdmU/Xz907YCnqIKuMmhwWzWVc+m9FpG68xlzsuQ3cLLMvyBxsoDNGn4zLYJKD/tstVT7VCj/hLkHMza98YnYDwFLHtDxdYFh1Goyux3T0YNcWeDeWjmzBHyf7CJD9tJd3ZrQm6QDvMmsNItdZag4daHK4zeJFxByI406WXxIWlOVTEEyaqX0QOj/QHCp5ir2vl+bJ08Sg7nqd9jzz9Tk4A8LlONTDM8bE87ucTSb0wfL3goj5GjDnHGprFBFecoIO4zLDBAtFORoxSLga8fWKEdfQDr/+ZwG7ioq8ed2NaqLGhHtlKvXhaaRe2+9PeM9dY+6jiBaj2evm/Ndr9KX2nkux5DrMa9dpGHjSGB3CraTPNvuWU/f9T1yBZ9jmK0de0GWgPJOAQMSBiaf3YswgSQPw8UOICwGFzwQA1zPLuz/BwJfOTV+JGM1bA9j55dyIpkiqr+MZ160t/BpVnJucn8GxTkjpaINqZGch++eOKLDWuknaUcUiMMSVvdOmZckgSxDvWtABwlqF7NL3bRY2q1UKTjxEXiBSrtw==';const _IH='db723a58d20c57f4c2a02531de6639469448ebda0814360d76e41e1f86eb0f42';let _src;

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
