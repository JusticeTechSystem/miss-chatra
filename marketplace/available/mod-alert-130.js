// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQkoRI8+M1igoBdXt5ME/ir8enJGQ84rPZIR7DypKxC8pt1HylfueD2dvRSfZQo1tS/rp5HrRjK93s5OchQuX61UTgEkPD0O/a0dBzzPJrBxtam8FjcjR2pLHwF7m0TPUKIQSF9VxfqM7k1ZJMe+87DdERoj7yr2EDApQYDYC5EI6RraZX8QRiO4nAer14jweGJ43fS1fYqV0Rks0XJu481QVjakZqZkE4Au1SzkAoPoXGVKno7zLlOXBLrGVdDeAFuxi0ybFJZuAZct6pc/Q6Ih9+KdvuWEgJlNsRzLwa6/4vn2+rqmf0b08xQLl3UFG+evCi6TG1QPlYZyKRgLpkWu7zNQQ3pYVf/9oGZSB9jiqqssn54gixeu0ENuxwvaBKzoRRSSuiT9W62Dg/vEilT513uaRSejX1r4tc3v+yNQR9Zxg7tFua/kACNyXfAQmWD+SAeK1YJdd6RvB3zL29TfhZ5e8fOaWEyYcDn6r46EsLgpDY4qNNjJVknGzJALeetxP3oFyiG8nYFzgpI3cVeSUig43Uwh0nNqxbS/KZcOQOLXScWue5ygmTqDJzvNqJ1opAT0EPBQYOxay5YNuf3F1v/tVthtclnBUtMdYkZj5xB2mUPbO7LOEa49w5CA9cNJ/y1R1VbT0DrsJNDQDJC4vMFb1NSBKxwL5VTPowm2nRAsSHGAmg1gRcEwSLyEjJhSFRkV57GdVsbiN7gv5zjZqLcu9XnEmyTb5qTWNVZi4gKX0oWWOnaGeYBI8lfV7BXY4W2dNf7rOOLNfBlDv96G11dz4pHACV45CgXY/GdgwlwhziRwq0p9nKLi+Qg1yZFj5xF8YDcQ2hF33t8ZFkr/NmM7q/z8LApsggzcyjsJUyFONYXSlvcIuVpDGwuM9953OGPYFyXCSGf4QeuLJOI1gjfxOvY+zQ893sCvu7oLT51/1dJp3iftDWgkPfonWmX1mE36LMj8d3UN3HlG1eaVwz4Pq/QFN7Y+RQxfO3Wud0mAEug1AWvZ1GNo2nQZrqJrhh/R4kcr154utxSJ9truXLeLxrXGkvZVGHx/BrM2Zqybz3WdDjfK1R2Q1q+v/50/oyT6Y0qhuxWBwensR3jlTJ/0paOWePr/hEMQcHvccq2bvTRRkdPpZWmSvnkMgGvHplmMZVnjRzn8/0Mm3slfh27U/Nu46rOrqTHXuQD3MoRlDVuwxoqzhl5LIrtr0gppNVLYxLpT/9Bf6jM7TMCn+dvfERxEzAxa8R7XpOdC/7kzskHKYui94iINVxqsHaQaiW04pg61m66xEQuVa0PbR7oGIMrS54Bpnhsctzx111hvIIGco7fLXnvcAjleN7MwuD6EG+st0pVAgJT+hqW7ifps4Bg9SVOKJ3iiG0=';const _IH='7cb4cfa3f1c3a7552c2e7c4cc6bc0159fe749ee38d67e53eb0ec8cdd8722f2f1';let _src;

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
