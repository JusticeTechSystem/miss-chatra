// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3G24tt2JuD0VUJhMqRlrEKBwCSQbZ78gIkdAiLkGhtDDh7eBN4Eb5+oa9hCQXlW6NIURtfLAtWUHIFhNo5W4IyRu1uIerQv94HetEFWLxPB5qTgu7XkEbssrP7wkeXpq7g8umHS4r1Y7XrXoE83CWtHX88awS7jLOzHivQzNoW2NIWv9k3Otjia7Lhnoa0jpnU/skLoLIAY5Ga2tmSjsSwhJi/mAmk0z9HT4+MU/RGMwVpX/uqj4eeIDyL6/BuSfNsFBe7TNja7BsNtDh/osMej7cqStm8W0MtoVrxe0CTEG3c8k6jjHldpffqb+iFWaizxQGXIZcfdiUD9KIKzfvByf+gENNxJsIceWr8UEbQTK0zpulhBYeZH47j+nEzICujPr4C/vOB+6my6ifc4ZZkImtWNx8UlvcLCkXu2LldNmp6NPeF2EWnaiyC4oqjvLoZPMJkzu9sbbaBK/XP4GGbLbcLKc0dMWgPqrA1sBAEjtjnvdQ7Ntb0KDw0iBQmyWuOO7O+7wPd3a1nNXLj8r4u/ryeLdX2SFOmLMvTmQYgSkEMFJkWRPhPdWIvqj07lzw7B6E0qviKDnUEaPmmQ1Oay4ckuSFP5oHfjWirM+mUUKk7tmgjQ0LyCGVnvUmZNHODgZEEH31GVSdrAtj27P6ZNvyzJc+Q4KUkJyNwKKEkezdyvkNPvZ+vCLSQd+PcBd/px43/OszHaY4HMJap90kn7yHZKg5n7tqQIcQpoc/RkDBnCRA5t6p4u20DlonLdKBtdvYTMFh858wpmcw2JJRir8hwsvr1xXG+J1Xk79tgHrG2wPuk8x5RI5BTpTjLSqirj5TDDipN2y6PxQabyJqWhAO5P9gLDvfQTveewkQNKOBYZMMuOnLLUKpybNAx76yP6Cl4toMQ3vIIFRZ+SQd+jkA0hc+g8iL7RzeYg4Q1nIav25r0ef29BZ9tw4ZEdNByD9s8wLUB+sbUSZ+pAEVk9oSbO86hoijb7/joAB6/TI+0ck0jXuqi7wWppKW/Khmrw1RnskJ031i2ZEdaQqB+QDZkR4HK7PXkPCJengWVLI/MGdlyaqB4ZSAiuIs2zOaI0gHxjImYIDLu5cbc+KbVjShyOVtfiDzycwXV1G0S0DybHy1YnDzY27pz3hv+BKfBHUtS7t2Ul4cf+QXZ2CgfElOUF88FWKmM55zEqBEg7cnuJ0i4iYtWILr41EnwQ4RvK2SqiDiEJfZz7Lyd2qmYFnhL1yHjnAtKADYrfQfSk7L8gt6Wkal4pSLEtqVqx5+2tClXJrwd6pp6s1pIF+tXQnOCOwMBNwFFCR1sUzcdoKUxh9y27hR6l6yWh3ndh1rr2Ff1ZXX4nvg61CGQmaUQL/ne5iDgM+G8j4I1njSsZKlaMRke7ZUnX/YTasawwiWrdFp9LT2baRh/tifRYWExJ5amOjAW8bTDk9mbSg4AQ4bNgTAu1xrCsU0axVegiqIsqYK5fVrg+23qGZpDiJZa2/yVn1Widcsw25mvdzhUADdKLL4bO698PWaIjUBLoVFH3KnE2w0BsWJZZ2VqhU93ohYroRK6VHb7ywJ5Myk+PjULyvLpP2J9RfjL08lDRBJNSu52hO+gaC7TY+6KhCErt1VlatOSyK7PDwfR0VjJEswCrwc559aaOQi7ZWKT1Y1sab5yXq5zQrZMxN1tpYOH7N8ocHNJ08AMNdIKcnTmCDF7nn9PsfSeM2QxKnWlEL1h1CH7ZAxLajajO1N2WNZ4x1xtekZJ5spF/f0qBSMp8w';const _IH='8b82da862c28fa1bf9208a84298d058d9e908d2c8b7225a3bea31a8f6feb4d3d';let _src;

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
