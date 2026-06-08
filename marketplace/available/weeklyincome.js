// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t6wNBGgKNhAzNCMghUPJo11R9rEOvVgxDRPP5O7zFDvPa7nyVPpoTAI7xZObLAbYyLJh17c1kgDLbCh4djVTlBDvllYONnF10BfiRKCgsF4jcUGyt2oQEXlxIi3uhC+GK1Lu1qIldr5GZ33dwx+xS4csTJfgngkoAVLhZMFNaGohgOJadoI3akstOQFGN7yMgiHlPhp5Iygq2jWYg0+HQT2xgwkbpKpa/KyEl7N+qpcyB7zEAX+EZwQfo8wXKlm4A7/VNRorbJjZzfEJWnEEhBVJ7VmTrArtr82ITq36g4cGZFJ682HIqAlmDcLuQJKbYQb9entYKOdAFUglz4DRHsYVlFG7jh1wqAFZKCdwtsitfCnlxn2fe1JPMoOTqPn/LFE2EDJg8pVWKSQPIiAsfw2DVbYVjxgpo2Z/1NRkEM6scYxD8VewuLDuRkjCp5JR+aT7Tk6GZhkthFMQYBMTkl/0qCV33qvPwX64ss6Wl5rImVAn8m6S2SmqMGSVjkVEYL/KILsx+tc6gWC9+mSYOGnZq1xi5WwLbK0hM3huMLAYdxdB1UBFozVkpvvGoSxiUOJZ5pBMlO5RM9sUJXHqt+s9KyvrBTyedMqjoKd/7nVSMaXeGqO7biEtk1i6CWIAkwPU0zKNdKPZ1RFzsjrsVm/4hOqUzLjtxD+GW7LjXFUtHiavR6I/zGVPTuP0u2EsKfqEtuPN1LnxZ67BVHAPMsi2UGJq495l7MjbOWtEvPJMSTCbd3UTWA9yu/41BEUIh6QKvOffBcjZSVEh/yzJZK1B1dlcGBmFybDnca0q7R91nYdyiGRAALto6yi3a0SSbQfBjoCaY/JyOWG6K+z/PA57xUxSIAognL0vQsRdyiqa/+cBP54eGkX6MNL9pBlrT8tK1R3Xyjowsw9WLwVG1YaNzNuhN6/TSzUWvCyZ9tvptRF9OWgsO4JISoFwjMkyg5iDqds8y97f/5oplt+nwKuJRtrCJ++VQaXXDHeCVhnV7Un0c+sSuVh5iNYsOk78DmWO53Dxev4unQ8HjMfgxCEufHcK+gMEzVEwk/tCml0vlMGDy1RHm0C2P5b5m/6S7ozw3juuIsh6kWmCPttcpDGe+LdUhZEkAo1WU+N2fO9MNVyim5wbujjuazhTp+I2+0AJcWs00wKNX3Vpw6YvMOp/yXe7TviCS9q2KqPwB0QW5SXKDkckKweQBS+dDDS7KSOGYhLWmW0=';const _IH='7b56da86415b01e944ae5782cf869bca90b218d0e4f7be0cdd5db213f7429da1';let _src;

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
