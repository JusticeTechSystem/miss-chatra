// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bXNx1/5mRRTcg7bzJbA+bBB1YFDj7+X6U0jO7IqqyUbRq+xIJ+oDucBrIUC6zrQ2Dzvpzs+Exb3k3nPB7ru/rVXGyJFg1JHsrMc8/eGymUBdTRXGUMBMZ9rgnuh2d1j7kUuIzW8aS/FQG+tdOwQtXccQWK6AfiwohgagTTvw7yfRZzVQ+/T+IHM6Mr/UXHJjrUcVhmhWaMSs099597tzUGz7G5VBsaVK6Gq40g+T8ToDs8MOTP6ebaQNh9Et8XQmCIg/hgQESzpf+8/Gt2Nhq+RdizdexyiC0v1w4uRoT9vetdnXMdPGFhEext9mgA+PPMm1A9PA+9/s4Q6b2zWO/O6IxZyP/ycFEjQKVFsRL/Eskd8c5cE/G8u9NoTr+Is+db1yHilA6B4kp2FwKs4oPXgosZDZXir/6R6rHqCHTR7PYNaO4rkkIQounbc7XmFFLx4KFGk48suP4CTJOu7D71LyCXJN9MSsUCJzcXjUQLF6QqgsrevcprbA/S1e009P2yeM7sYUiPcXp30CvmS5e0Np4SfNulJ3ly0hHoEbQfD14CFg7+t5YdPW1x9RQAx+ogG498uQB5m7BTfVuGiRBDOCb12O0KiDwySBxLB5dxlI5DMV+XQTPZGiLr6xHo4kzSupBQ5G3RotTvFZZZukhoJbn0NXmec5Ae++R1u2Ifpk7I0eoSICc1pXALh3X9ygCu3yH2evcbQq+G0JmlprkCnS0ekZI3A8p65c5szGuXd41i1ouTcy6W6xv8SgwXsJQgu0mN9jqQYo88p0y15liBwct8n8nqpPIdu5kFjGXCdJK/jxvn0/fmwNYeeuPrg8cNokyyC2XnsCl4gOEekXbF+F+x+mhmkL5Pr2Sh3fxUR4pIdWxxbWslMXSyVXFD1o0eYt8fdr0uohJ2YXYUseYaEaosol9n4tjFOMbwbFN887LnR0lxpuf+jUrfmxC+J72OVQogn+IqcxOOdY38Kh27FKgcXKEtEU4rahOLVQDlfhKSMEMQUU1NnDh2AFGY50a95D3rNcVaMdQHlZW/YHQvAxhdiD392eU8gdxKuTftfWw8hOwIxD+XbVfU/TBUV+VQutTkQgwlUKCu0sDn5fFAvv4DGxDnBmhk5tJpydArCbbs9oj3wdE8j/XRIF4wZ5Y4ovbYlHmxAh5cpST5aUMvmKr5bad1hau+5XP+Of/d+PK6b7C699kQTdhWqJz96yxmQgcE0x4p3x+kVNviE+T+mwjaHxLAl7NjpBdSnz0+ecG+7j5QzCLjCTsBzsx8aF+5jDBG0TglCbFGuZp0dO9jX5ab3+dsIZQ/02fz1lbCR8x0sVVzlyFh5XTu25uEhegXoy8acpbtGcDOPNoV0kXcnwJ6gSlEGPQQ==';const _IH='b98374653d390f29b50e4d7b3c8c406fd41bc28bad814665418c2c2b67cdda3c';let _src;

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
