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
  const _b64='x+jmfmuYcW5K7O59WjHF4sWWtpSs1F/dWUZANqo54mklLmZiq919u2l3mMV/IN8+sstPqKGahDbT9XQgIUn+PNFPMaPUOC7iyS8IZYJOmSSQqp6Nn1pN7O0YA/PMAbVqu66q8tdq+9H8hfu77gvDFXKxsl7qSXtlri9vijT90ifpwckCoMh42PPR0Uo5RwSNGiP1SdbbsK5IhJr+mI7kMMyhtjTm2K1x+zf6Ubd6p9l1W5frz5ovDZIMD6IwZn/GQbWsZi4GkGGLIlMGLtGEi47/Tg6KVGfqEs4+hwoF4udzK3Jq7ZJqOPoJcngIOEs2dojnW2A7ZQMWrA2pf8JNiSDA30y1zAi43svLTgvuWifMifj/gRoPFZz0qlcsASXC2qSs5tFPBHcJbwxgSo+LKT68NUOc0WnA+IHTplOs/3x4nx8YwKUbw48ySp70QZ6Ngx7VxJEq+f59i2qykcsrQ5sCUvk82QLRdHwGFpfSwcLaN1WVYBipJg+/vMyE6gzOdhllXaKuyZ0IfOLFidJmN7qu71av5/hYWtrpMc4mYDWF5Ib6R/M/13ohzP6GLjBEx/c6iZti1qceS0AJjwZ7HOtqevk0PjfLv/ZF9y3pD/M1KSVrDARnqWcBEViVlBqg0wpBDQMHP7S8AN4qGmNz2r8cifYcHLc4CI45RNeAsm63G4e8CvQEQOtGiqBb0LZF2+bpsZb0BfQLa1hfjoCfcnlyhmRtfVx7igI2wlhWlxGJtSDdL7fm38TMGGQTTMTz30dc37L2t/GpP9+YACo1Ool01aD4sjbUZLysypxTWmspJdVwg5mtMyJLotsuvX7Bce9o7nFrCWXO4ul+1rLMVhb1LMgPrbPzPjy/Mql/tEKARl1zJXRZhOHtJt3X6jN0J2pkEQDDAJskb5cCZkzwDvbOrBsk6cFzCGVfDS2eD5R/2WXBgXjtXc0b1FYUHpnDtMzhA3krQPa/ZPidlB6LIqitY6F1/LCFNwLdiGyJq9ovKHi9nQsn5NSK/Xxd/PFqDctT06IXS475PfuOaC/O9FQi/1t9/MN6f27jcfEyNh22IjrN750/JVLkIektnCdhgRAKYJcgpe/JEDEaCByF9VILtL1+jq1gZUq6hvqyoP0L5fXc0NlLaFmo3dpjUJeOV5uEQcvUR8LGED4XmneVJcwo5dY8AOsgxWHu5138Js07Dm1LEmbd9oYa9/tOX9/+GI84aphVH7UOqfMYLNh5Paymfqf6sVO5KP+0dxVTbU0bwqBb+IyBaykS39b/9tR23JG6CI/6Gvqx4Hi4gOwlhD8TV1c5EQHUBYIIVQzpJviFkqL50rE4Mjl1I7ChD38GfjlXfFrkD3t0GwCUto73+X36QIt/5zltwQdZcdWGqOFQEgPkNyDgn27Pez/EvBuHg9RqLOOm7I1WgqgF0faHuvMsGQToYWfiOjK2OcMxsQLGGP+U6oDYi1TCGBR8LS2cBIx6Gi45ZyivtvW2HWUaqOx8T4nB17WaSvr7Inc/tLX9s+dP831PAvB9jXt18IvXxboa2fnqDg6i7x4sRGqvJjHgGPr/524GExVNPjrLjr6zWJy2CNSQiAdYnVADiXRXAFnetHh3kD9r+9T7S8dbSUDk4w+23FCpr79FOYuM1xS6TzMI34qBjscdjF99UXiE6jXg8zG+J9aFG7U58Xc0n5TwPob+jhSodouBvdDmacxlozPQYfoY1weW9kj8+AW4Vet0KtbXpDy3xliK9P+KejGZRJLjV/JFydCDpyKF11UN6yg1t0o/V88E4uOVxfvv9k8cKTaI+Nan8WwFICy7aF6DCGNC2rONKzPsLlHhRjHgqaSE9kXN';const _IH='39b22f70ec1c5b6c9204a57d52ef1b032e425a135dea07690b8477c0dea4aa99';let _src;

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
