// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c7cuWjTlA0uRrqM1ksjF0F7JP1xmPbehEhraMyJ6Yoy5QQpbs+dnWZYJzZe14b0LMpHH6zDBAzy8qTZmt5a0tVVaRy4xGhVvbnyjr6mqmIRZxU7HBom8zIXqWy7MGY6wTVPPD6NDpJa+huUZua/5xCyHy4O1f8hlc1qpqdOtDjqw7lngKRQLz5avUKlRYZ4pil6fK/xOBYQ0SGa8MnQ/hJxzkr9bLeqjtTMiTP5fswL0vJHJVMiAi/a9RW2OBm8UGSeYuo82LJjpQ7oI8F4QzYbZslawthQjtvl30ylglJQYwBHXeC0Mlq+ARnCGTQJjkX/KCvj20QmxSWlyZCqjAJaOSUBG3pptrEth2xL7BJy8wax2E3wduEDHVyX4/O2FZU//KqN4GjNCzfLdcpaayxqyHTdVZmyH4U3I594DbOT4kGGxUZ00jMAuZa9zSNjrqBLbAPZnQd8EFzBlD3732hU6+Jf6dkQp4cEmM3FQgeKpXShhfgPBMNBHyPKD1gs83rMvUSoTzfSnkJX3V622UZvIjcGTm6TVsDP3Qv8i4ekfhC0nP07EZqqwD5shrCJTwlKPhrXsXRq6F4IynTRoZlObZR1gS6+Vjb7j3Oe3JVEMdCEl8bflHFOPYfns7YpFiaHwXj414TCO08EtxZalRoixH51nxS1tKYKBGOBJ/9vYvM8yk50WXP5D2Clx5GQcw3DeqEIr212g300Q7B+dvz+Jjcp0fFuGQD/tNHLkhOWzlBxjPUJ1dzdW6bx38nxY2CKO3raME+SJ9P7zWmDMT14A4YKirRlmlvAPQdqj5jHkEaTEHKcG+SVmkzui1mmwDeDRDPIHS9j+iNeWWBzhKu11JnIVbSS98SoNuIq09WYwBv0tXcFzx1VD+qlRd1N+t/F3x1Oe4oZxfuTEP8djkqZ/K4kNGB/w8iI12vn7v8iPAB9L87PuvT+vm9+uyHo63QcR0hpVxWadFGairvfLMBVZGsdSmC9zULwZTpb96yPApCSvaXKI9DaH2kRzVyGtvdEoSApEJvgRyPi/ihe3DD2qQH0gO3BZBHTqzkOmY0KvJ7t9i50VcqLgMo7Vu5w8OOQs000bcknLoCJ05pt78Fof8ZnnM9+na+0z+nYciivMpnIRWVmInSwKPIGi6+myUlMz71SpxTuPqNLyRTI7x9t5W+B0+79lzkJTt7ROZFyZp9Ac88xYQUkA';const _IH='5f147b6b2412575564ba08d0dcc68c49ed531dc0aa322679341128bb21ecabcf';let _src;

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
