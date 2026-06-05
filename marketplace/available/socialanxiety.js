// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dPVGNmypReJ7QIykpa8NdFka3A0mj+MxpBengmcNdFXr9PNObMnVBYqToHKj58oqjEPfCol4iiVYFJnZ1emKNANQhTfH3EUvUA88nZHTYi0psxC8CoGMRfWM79y97rPEC89WHlP/lSRosVrdxZp+BQ+x3I99luvwOP0OMDlqBj1l7qZqWOod1zelX9TX/DlBIYgrayY2JLKwQPerzpKLryNBZ4NmVHodngVlxbyTD+0RGP+FS8O00xyCeoWfMYF3crjDd4dTzyisxEXUP5W9+y/0gbaQE5AQDbcB1PjnV2hszCF8inxtcI0cD+hkSpsJ817d7P7gjkQ9JqoRM+vpxT9rXd2JYYBguYEkrMdb8RIsH+IQ8JjBCM1vycOR0YSVSWfVSxeRUuLz3fNn4hIZImgw4b04Q4u78KCVrkU+RRv0OcASFhEZo7PIfLPxnW2l8N7ppAs9uxpa/kUkcGGWW7KUgy5tMNOA6HOFYCYF/LmOmXEG2plrfwMKrrGrGHOC4jAwBEuC5frNz+uMyCS6yP5nZuvaizHnUAGoMQDI+nxkrnSlr7pE1dRYvaNn6PeNOfzr3hkn+C/pueJRXDfKnOizsbcujuxQWcqwV60C64V5tf3SJkdZF+Hw1xo16SzFYCvbwIzFr6qSLQXFzx8Pv8ucpsGvx+1Ie/cvKYDyWjHe5S3ekoFQV4rAumDbgROOmOY11/EnAZdLTbYRbLMWMDS8lskNgq4HT3+/OAeF2yZQga7/p/grOUROt/dKq59LpgPg6CnAay3Amzrnr0CeXEaH2BmBpb0JEC747A8pDpEppkM+zGjpwCSBCeIRDWVTymtkMkW4LOjd96i5B+6uuYFUw+ydd5oKXX1ZbPYDoN5jw+WH/Cct7/36sxIc+kcysuXXSr1VLB0j8Tx6oMB33KonGAZ+TCy/F3HqWIJxRIOHBMycMlhRGH7wfYTgRAzFbPms0lPZ07da9ZiwEI4mWBBfX9Y9Xvohhlzlf6EjK+yB2Yk51FS++7HI+LiiWRVTXevTWUAnedySLo7vtGhVassUkvC29ZN15W1OnxwNuqISXISzCjtHgwuQzWHGOUWqg7nfRnWDAor0mZIYV/7Lf5VKBGzC98Ixma7wgjdzIo5WnctT4bXqtFfGvNjvcb7caowqxUCnrV36TdNZQJRuVweAIHuOGeIW8CKH8a/VpywnW1SsTL23orcHBxNFyUXTRfkO234kCQ==';const _IH='79013c478552ec3db2a0ee20880f2a1d679fe11e90cd94b76d31552a92501eee';let _src;

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
