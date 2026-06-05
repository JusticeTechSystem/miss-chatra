// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='125c3C2vguVaBhVnnr8wBZMnoEJzGqsMCy3QS6X1MeuV3v0xPWJKbHQahUVYXO/lJ9rfYuf9B8lML5/s8ZYWze2MNiqwXNGhao7Xi3e+hoWziXxxU0+eCAQ5/jz7iaDI5a75nEQcQEzrHuIRPNMx7ykLTq4PVpxqgZysj38jqp/tBNWRUfSMXpvYOBkOQL6yJ01AXo4tIFm5lL775DwLIygSdL72e+SOSTZTTN6u1VklGwRlapfFmwK1fgwoRvC4kq5aW/zn6qodGhApJL/U4lApih+w4wwrYJXiwxYNYoOWOWfqFQYw2pTcBrk9WdpE7tFx6pPRtMx788F9Cfc7gHzJm47LFg7vpmFUHm0RAT9ZHLs3fZ5it734gSr4lJGuGJjxJ0aMcwRr+Vx7kphX6PoRsibK7oZ0eiq7M+gfyVhWidn5cQDsk+YwimUJU/wPy9lUdLWVRe2PV4rzSiJqwgAOK8Mbs0x1Lge0QBqJhMDDltWDsPgrbh/Ctx9JoZ8DFCcrifZviDMb25pOCXAh+7V/M/MHZYbVDXTxLP7w8YwbKNO0xoUxxn0laEB27Bme6ufu0Q9gZjwGq2yb/cFjeW2WC4BR02OS+q0hlvJ4GkLoiy+If8GCZP13Z7bmCViE65l5BWBYMkylI33xDlLDYI1aqYx62k0WDNZCR3QiiMWCZlPei4idR8H1TC9da/6n7nciw99WQqqsFEHo1RGToDM8OBLNyQdS';const _IH='7d5633f74f21e40e86b79f7a7526fd48127cd6b889c95ae3cc2d1bd5cb19eb03';let _src;

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
