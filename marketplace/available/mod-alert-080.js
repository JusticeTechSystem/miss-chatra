// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSVd/iM/SwhyD46V2TN8NhLdwXYPxWQiaqhgcEYsfPef1uvdfrWadCFudM2CgkcxKu86grw0k5oxATW4hJvPBTKrwWMcPNU7vt/dkKUxvYilIFXWZ/TXhKUFakod8OSRozmAnoy5cHew1FUl7f++OrXhJaJCHwXORKwRrMnh9m7S2MWNG2blxJ/AdA7rm3rDc60S9mpdedg/ovnDQmruzNhpU3Xfj6AdnypoTkFfpjHmtWU+FRmZwUAARkp0EikvIRqJ35IijMZWPF5Q6N/f5yn4YmOT/dgjCxR4NrUX5+csJnrkd6tTlPqiIa7Hb8r58CmJcQYxNsyOUGnZe2F+7fD+1UXVddBGq+nLa9Nb8VixQYqlZJqWwLmyJ9TtC86NOVYcq6py7TMvZRZruVTBQw5bKUUrToQHMF6SKbHG2wqwI74DlM9U5G88OxmLCzToYHXB6NPi4bZfw479KfNce0lReoz6ubKbvG0xYyLqXLL4cvp/DsgbRKtnc6W2D0FH5O3uDjL1RdCkFItp4F6kX8QCrLdKaD1mKe76896mSER3JGnrD/lcIKE7xnukLfzxtXyTRKlO88HuKkUJbW9Xhai/fW8dXcv8krWZzicmH5u/+SUOVYJU8sD58A/gkQEApzWt6t6FhZSpwehTLqvNkQg/SDJoNeoskXDKGgP81+0d/Umytu/fyIr2VlUr5fxuwV09BBMNkFIcHWtAI9A4o5aiJvvZDHU1sMMvV+hbXJt3Q+S7TqDezb71tB2PIn0cg6ViZrNGzTc3+TelgriEBViPpo/zwEmaBwhLqxxANLo+e1hoLD0kRMhhfRP8c0gudsdkMHOtVlfkfctoSE+WKtsyOmp/FZ20TMbl98KnRINTXx7iCBrsBveNO7lrFCn9jzYOux+3AOKBwrd3ux5zmo7ehkFLDZfvPzf6BLVJGoisjBe7LyhakX/Yc9E0OnOua0S3VhRNrZJXEx5HgunPe///73YWsUxTs3Pt/nbApXLtTqc6aK16/n4r4PrFSCxVE68btc0G7Fscv6oeQNuGC/oluVjxkqGVU973VgEm0qjdYuDI4Ayz1HMezlcirlTcuAL7WWPkbvepBxYJXmkiDS574+W2O0DiLlrzOvrydU757sF4YQ7Rrt2LQZUvEfu1zveTv2+lNLsi+BCT0gUdF66ZZDkfjAKTix0LaDU5rw94yUxYbtfmY05SmU8ft8XRl1ZtkaOn0YHvsmjUDNHB528VQzp44PsFu6Yl210MgFx+cIKietbgcg3d39BxwkWEHQ7y8IZdRt4nEixXuhuc3pPVxoaQWMRtqH8YN/DrrsAAAn5JCni0H71HPZEywNOiShe0S4modzWhpq02oh39b+u21D530cV';const _IH='b0ea503800757d666fe0e827440a6d238a8e1f847f808cb0b2fced8289c96423';let _src;

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
