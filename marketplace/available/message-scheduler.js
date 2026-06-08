// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+MwigjPbfyzWkkFpSPrdRcPuhzOzzJe/gb+44/B+IfRLinNdazEkg9qYQkiHdYQlaZtoBTl3tVjG96fY0j6NxC/VjqHDuiv+IP8REQYWEAqLStpy7h3372JTFzdrNNDjQa2GXk7o2YQrXwV/SHuXTqUsygC5stD/hAaUuPVUElNvYUv/flq501tb6D/6cp2ElOuAUOUdunyqEAspUkZOzwKYVHDk5zfMWlucRTmR0MZYg0B3EIU1zX0J7r6up9NFOyPv53cA07LJJoqTajeMo5D3zIFfPT9dKoZhJ+l7Jguucw0KrBzxhyaN50Jyj5hc8PFFo7yuFtMqHHtGZGec9Os/pBIGjNI4Dz2OoRYbk5fRGfYq5a0gIH9IUSdrPJKIQIuivAXn5pYr4OE4dTQjUtVlqkDICj7MqMUQm60KzeD2M6TpZg2qD1WqNzerU6a/x6vb0jL33EMyNhNOac8KMVG2oViSsqiQ6EDBsLAWpAF/KhgOmxIEJJtgBQIjrHGT3NUmF/DKz5xNvCsKV+3Of3rvoedaBeCGDtQr+Oz0bugD87SDwrYcCCRIthpwgapGm+DB5QafdpXoXTl0eClZ9VdtDP2l/sw7BzrcZXQIN5DRbEd8M9fMOelVWxGy4/JMyJ7Slfl69enaHdqESpHE9U8hQSYyPdd4oaiCk+Jookx+zQBRRb52b50Bx/LS3LxEucZeGLZyFO47vnLDMeXkiKreEH5mWXdd9QL3oLAq7BN0dpC7Rlcy12smTYRJ0pBiSC0IWOEpWLfEmYZH0/CF97flEZ03lly0Hi4vKBw+y8O3Q+9NDPCUYu3vtRe5WRfsDhmCSaOTFRC5tutL3Z8DDLzIjQifF9wrfWimvIoqhgagE5BsVuO9CCF/JeyzRwIozAadPFVHSjhjNXxQ3CessCmOs29hOsJjMJHfbdnn4PW+EUdMmzpeKyYdAfH/K7Vwh8XOXWr72JK0mhBsWKNLS1Mw9V/ieSh6+HplJYZO7HHjcI/4wFlyrnxUmugb1r9Fl/7zYvPISXuImFEpIqCOWBH4dNusS56R6oshQtOXxe2X5CfK6FEMA+ALQ3psnU2sTZcKoAsQELfqRFE8CW2oNMS39xfXUJ/i7ZceqD2OP4aUDXaJF0wDmNNqz4/eZB/d0UZCB+G5pUNgWjuwxAXG9q1CwjGHZaPA+npdztEyhff+xeX8wxX8BHQyQBsF3RXA+a/QfjFroU+9t5V8nuVxWfY+hvlAKrCeb+Pe3od1YvS43ip02TGKR+jFyQRnawMrO39r510/VdlXycBT3Ce38AesGmFnioI4E2X5O68M5Czv3ywbnCKSeaSG3+zvWXO9L/tn9BhaCzerHt0j+HKg3cLHsrIcZhZMsxhGM6kMpL9cB7gCQDX6';const _IH='26404421e328db2386ad1c5f86ef5bb3e2021fd3c60ebaefb3d9e92299751640';let _src;

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
