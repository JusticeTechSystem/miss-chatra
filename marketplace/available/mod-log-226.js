// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRA8guS/tnQSyHRkZ+XqiWAoxSUbSCKVLDc0ujSRagWSgEDFug90x+MB6+hA80jbBX2FJiIDLPRQ/H8E4zfo8bUpSWQ2AyGXseneFDeCQ4CrInucMd6qWdBQjjzaI7i+ouhO38uxmof1E3eVfr4ECoZsCFpo4guy9dNX0RySVTQhxddPXXXNyCiCvV+847/7yTFGHuSPOgD9BW7JauXm2Gwo2BtdIFkMwTuMb/2h8PPbltbruZyZiP+wWU86Yk3cFj7DMGDjE8Zao5X31A2b8CWb/Y5GXvusRzhneVIdX8/10Ui99JD8I6utbd/gUzUbWlSQDP1vazuBDqUigixqN5T5E7ydhiOdmG3lyAlu2oUTD5iJAVpI5smS0k/xLRjsJ9ByGsNUIXEQ0mAdReE885W0yIM+qim5BfTAcb8oHT3xAmzt0lYnCR3xz6hI8/v3H60B97BpE3DNaGC/UieG4co/unkfjDUoHpHbl8BJz9clK226CP8T1OaBrUtQAZ1tA3+BFpTevHrY+zUA1B0ZUr+7hETNwYZ2oEO99Nlmo3f5VZULm3PJYGz8r3xjWeYUNqDtpbT6C7l6fBzGfrbjLYqyYv5OTKTGL3SQfZExffaKqcTztCJDbQ2vTDm1eSCSiFAf0/32hIQd2a2vJFb+KPFC+3uu7/443Bt41KbG2zG1sQ0ljoVKxQnLnfjtgvG8YLhj+CNOnUfqE+dAqmA+OzieZN7j5MF+/k4ONw0ZhS0f4Hd8RqoguYPhWOtjO1ZYxLb1PQpawEi6DcoWYfqSefVH3SH3zkHqAWkVAAQnhnoSQKtk2d/g2280mGmv4hCej+m7J2kxUfW9T+Hom1tr70GV61XAXKbx5qrceKtHdTgMgEMPLwJfos53PcFGgBUBHAXVSSkGHpbRr+newkkS0joedPyWmWRVXQ331b+hkFlDOppfNPjf54DvTHVUBNUKXZjBnZiObHjhV8sE2J0TOPaEZgzkJx/3ngCteQ748Nz0Q7Z2QDAlBDkv5ukswjhTqZsy033bDQH9+roE0qdGu8++Hufkkp+M+YhL0gK6kWbbsG3J6pMdwV8oSzILmzN6IGonh8t50k6wG6Mv6i/RnoT1X0u1yyfrc67HoW9cYoTPN59J7GHnhUS6jPh5Jarb72gFxFyKOvPsHI9vu6DCIL2D5GDzKz24OUaq8YCvWBq6kX7jCDiOdbpeAkGsSTifVzm47B2vVgrxBnoFWC5GZkUppYFgOU5Kt1WQBa5lPiBWqzzS5hjTEnSXQg5H8BAYqupdIkPawJQDNGw7uyUF5I3ZkakDPdlXTvb/Oe/cfM8zFkEi1CN0SqXMv/k9ToB54qhYO4oeDqwH+Oi';const _IH='3d63e21296161eef9d063be8d030083fd701b9ce7e0ece202fe5b575440b2e84';let _src;

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
