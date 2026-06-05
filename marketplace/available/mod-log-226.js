// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wCrx5wST4190IJdOGLXNAIvZsReSzwa/hXpD47IMjlIYhSvuaUxLKBbg+VxjwLm9voTlsWsfmw7Dfs9EqZ1Do5K3hpfxCdWWlQfHIvTrkbnTSRkjUure/HslmMSNVBFfLjntnSC3LXooO076jLpxDw8lud1RcFcj4hUnVRsbVvlHhZfCtbQNcFMrzGsZoygtu8HmhXFUi4CUHz5MbhmGKPNYhZdt7ce/+pedhOQ5FQIFwjhFQlvFhw6tohr+4/Vyt6m2Lxeh+luP3mKR+Kc3QDktSzt4jS9LWN0vWGhoWCHc18lkfwT9VRca/Bwg08vN7rv1zXDfd+hq8wd6CTJ9XCzAlve1EYS36szv3YhcKbkaNRqwZyPtKmLTDyu+Ufky9RLBFahDCiUoL9Js1jtbTZT2gASMVQiDrE7C8xIcIlCXbpqjr1F70AUYgW82iuDdMrKH3Orr3kdpps+4IauZOQ9tG2v4qmuTyFXjYwvQPwSma0iYXzs3KeePLQnS7auNUQeeMcXxXCGA1JtBFaLkbzzdZAAPAnX0P2V81C/Z8KCB6OByMYZDHZjcdmmSL5f/iz0145lhU8LDGDePr0dOS8GovkX8OPLaohesRRdlCcdzAUW6I1ECxkkTFhQ/mJgk0Qv8t6lhKQ0ktmlenc0Dx+2DHxxwZxA8S1fhv4SEa17z64yE09eYzsOsuNu5tPOvqFBGuZGKiqynLl9s5ot08f4wOG39Es4aU9WMTNrsp5iy1nl1jruifRpI7p/bv20ULyWRahASA1lv1+fRyUxKK7ZHwuZymEEL/CmLVoxYHCjXXrKvySMMaUuv18YpEAUR4PoS2jhssXR0y/hX5P2adG/Q2zspwm2SBJSIZmFvsr2US2ipOsA86AKO0FLOZm6UVwYZqBMbdF1XxM5eol5hMziiHKfqZjt67vBk6jDstbUG8uOKqGmNeSqDEC8lfZBK6CQTx2S8YQnja6oxYKkomUNOOnLC6qycQ1wyCFREzkSQ/3/gdIfPygqcPcOBFmy9o/brTePQcg0OnThzN1rt04PYIoKhfav/tfOVQ5bIAd3qZkZCaPzc1SbSaEsPcR8x0EvSJzqSgWyo0iq/lD0Q6NPeF1WwgPxkWOsgPUhiT8DPrK/fD+0a/sANbx4RinMUyXkEThVNzF/t4t6UaHNB+iiHMFIjkRbP5p1N5ev88UmyQQaYAKkDVdjj+jigdw4SxZvUUq7S39rxce6LTtLrdFyWWtUjZrPfoMrvljs2bwJkTbFkOuRy4NeXgrP/ry3ljZ5yQjCreV6bTYDz22Ueiu3kWGdRwQesv5BpLhgpCMLxXv/tI3KnwFO37IJYXyygRC1XiTXSZf+QOw==';const _IH='37ba953fbf44ecf6b5ef7a70dd9d64152d4329667d15cfef7474e37062716050';let _src;

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
