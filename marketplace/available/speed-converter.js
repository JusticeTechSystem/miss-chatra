// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSVUQM92FoJGo8EN0K9kSJO6d6DFUeqmUFP9vbkeG5rYigvUJPmdXBCBArPFJnLppPiXp7d/76Fh0KsLcHQOfc3g2mF7VivwIEtrHeXqPQB39bVKGEdUzWq5H7y/9HQ1Pwe7zalhk6hb3o/4xHvjZeqgHN3xjYMOjRwcpNh+HxVwFrBMOmGQVw6PfIgesGmDIATFinET2sXCU+Fk8oA1PwglxrdXfPFzFdo6oh5i+p5bXoWFHXjQK2S0QgrzRhKewuOaN3ZgTUFgPqUn1baG6L+IvDZzOODyFCIy9/gkXgMjClJdEiY3SNw5pY2wVxz9lsyg/9wKdrd1ujtJbMAueZdt4cYwRx6JBISER8fFgslfEeIGOzBJp6vw7J5a4WO/QdVOfX5bEP2mtXcPNB7z9LvwPROibEfiEphfixqhXKYidX1EUPennMjX6gXn1eZKOL8KqvoNxz+I4EVuqXYMLor6BM8eh9MNAqSgKF6ZSVYM+inrhZe0H28hx/dofwRzqthjV4v3uTXGIbQkqOddGTJwUpfgZKi3cqur5y1bJemkPjCbj5qMF0Eii5A6omIP2F/4c3/xSGWDdVVnghz9l6LgMQs1RMKtg+6TIs93mw3Uod7eEiigZTMNQSEXnZ4CW1RP07hcPBBNdJ9HFtgsdNZn9EbztNM6PProO+DiLbQn+HMGdqcVjwkyHN2tVWRGYbKWQi6DzudZ61EgylPwS+7Qnx+fST6iYa0VNzUt+dNNHjXJMQ3nbwkzaj73Z057giyRauZujVuk1i2pBQFt+GsXfdcI0G0hpxlN3rrQnjdVrvYIZNaK2d9+nkhcLN1NUgN+efBhOGJP72tkGICKQS6Vzvri4aRovWRtVLuc6SjXMMjSg0i7o07RWdZR1O/qwf2IQ3nhb89KF6NF6MY7cPUDaFDzx3BRIIy9hDl3xvfFUOiMvjMnOemNvHdSTTyx3qWTtcizPLae+zmIJO9+919wOrI+iRU47iG2VaHDFIjgxpCAabEzK3ABbx9wUGtUWnIK87md6P0KJZ+XPZpxmK+dvCn3FAgYaur9/fou5y09N3nXsn4f6BfnnUj289lwyqpQjEklM6Ik29ddIan8Mw7GWMMrqcvJpKqcMK+NBzWLoRuh0y1bZFl3c+Ci0EjgaeEtajnT5FiOvikVSZbkacOScVdmQBrvswXz1RfqLlEW92g/E7TGyGwjV4EF2V5T6wBDtW3mf30PMjoxNM5t7SevCPqwVBl2ntKdiUY2YLftk+2xIKf9pV4fteAoDO74uySeDvzUGKg+/asGzYYP77qFlnr92iIn+e+zDOr8BwVRDHiWOiKNvlqXOyedFwtLuwCTIqYHz6WOe6p1Gzqb1B+GlfVzdpLk3sld/lowq2Z+129Ks29MUxTZ2sqRDhtH8efK5AT+fJvmM8/JNDBdS1i8daK+BObP7c2PzrxXf4xlLEuJYQ+uZTfkUzDzXemd0vtspLhnJAANOAJcaHfXVe8QR/V2dRR7P+tnLRvuSPhU885cJ9b/DsQKSnBOp68KoGLUKaVNL3GM41wrGmZ/kzpGnRXq0baydG1HxXpC42d18NYQLvKiO9rHzrqFpoOLgveKOpvztOEkKm36/SQAK77bTBS8f9ZtxHLyo0kDRlzHgVihibw1UhtIfdQdd5cz/FVK9jSz8dnEr6FKa6EQktkzOE7XkQuArsW7NjWqs5Ha/AfHQGUqB5f3Vlg';const _IH='8ac48d6de62191d626fc2e6f43979feca3e61f422609d2250d69c2b33b80c1c3';let _src;

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
