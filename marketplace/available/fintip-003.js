// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1KBfN7hQ2FdtzVMMkuMA2ZzCj96RQFDV9l5X3NwglkStZh6avCKk1jNNCiky+uyLcNt8EJJZUYjJNjYXMkbGdGhu36WQy2XrYaqDXpLCEwTDfmZqJcQAQ+8oecjUMzpvwXbA4AlZdPKQ6WNlAyaWlfQ1dhxFZrvxfqAzfHuPIejNTZQNhWdEogxPNdV6o7qwn/uDiuHQqG8VnnCkwV7O485NNNugAeOU5WUQ0xscWboP+Fbfcppvl7BLfrRDleHOU9vye9Kqa2EROqbKNV96qHtmV8RL/RRpMju1XSCrKi8kUq27ahVkbo46/c+Zg0zNzwxSB7+pwXumIvScwnw7XL8x/kONbdNNg95ayt3EFycM+YtWE7XHozVIRnUmqnewBvp2POerwkUuZTeOTxnIQ02z/nG/OtqIBoMcHXbP3Un1McugvmarbNDcB5g2uTB2yvmUuBM2oN4JoVy6xvGJq2JAT6Zrw6S+KtI3/vW8wQVMO2rFWMwRa9PqU+abKLrcsUWvjFpvwbG+CO7XaGg4RmCeN7kSRE2GbYHYl0v4SExO7IpYOHs0nHoq8sf59pbOTYJA0v1Hz5q2I+svpR1SV/VHaojmYjJXdq9qMcb7cWFEiGH1bjQmgyAu50sHcHinTfHhJnZFfR+SUY8kq/aFpUIzNfBfvhw39ZC+6Me6jEhJsBBFd/BbextNlHt7TuU0fPq7+Y9rx3JLaCPB2Mo3NcYPgLBpRpNdBtRKMkglxl91+ZoSk/OuYnjAVV+FoR9gdlmp1dkhTzasheytdIL1orCC2gy+cW2Vo40KcEjMfmZjwbHw6oz2+bB/yCcn0Z1FSQ+GtcbHl1PwyFYecyGGeYbO7dqyVLDEtOeHwnFBgQ5Stvsbps25yZggYY8RagZIotmaK1u3Yat3Hp2uy7Ky0LxQmhGND9xdEMkK848nQsWKILCnjGx0RFDsZokNbjnmF59gXJZGJq1rQoUs/fA/MSMoPerh/MzoD57G1sg1o4zHUqak+QWxBQROKTbrFa/Ipjvk0J859z4LBduFtMlfkQ7MsJ2PbB9IWUF2+1yb';const _IH='c78ae0244356301c5bbe834f628b56c3b7309c700606fb61b74cff6957fbba26';let _src;

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
