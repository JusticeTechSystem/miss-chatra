// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTz25W259qasE3McxwIQnzz9Nt1ziBGEl0V9UEDTWbecLeyiQcHuyn4ABkCvBsOgsrnznKAEqQMr3RYXnG1wx0OctP3WoqIlms+RieYZW+yGHn4UvoTNC/AtXC8dEM4UNEfl34yyqwGJCC34FjvcdHYYYZyFV8b4tufTXFtX9cUG3zwSNVK7I6rTTuvRSwoDN8YpxkVYS3NN2YjLE03nJp8D68jhYybPJQ24TRaRd/5fmns6fj00us1KYqU7glCNOuCKgx7XRWs7EOZfY5BZHPhNv6zqmOStfzmHWsaxRe7MQI2kKcO77QnCLgGezwl3hy43a5ICLjBfVR3vywFFwP4l8AC3XmvHhYNs4TD00o+9pm0Tzmfkx6VHnqa99lM57dxKWF4XiigAeAJupwsuzPHa76bD0YDWry4c0TXvtqCRawOjRz2klr8fqfp9MDSakrrFKJCVOftPz2/NRZcOqRKho95kE9t3kw66sfTP8fenXLkh0cljLukdsJjnGKPQiJe2d/bNba5c6Jci8q76kx92+wB2kjWa9me3ZVO4p37Mk8jmzXsRdjAPwfx6RQ/ot62EpGZYxEqUNof/QiT2OZo8B+s8QPnyB4xjvyv92E+1dKz/UUF3q5S1sJdYif9aoY5DFUEsLV+RvKi9lV2u0bcKPNqtbWYL32hq6oTUq4jnLGX3GjHxWKkXNZIA+8IXUmZItNBLOAN52K4VJv8uUvD9VpYht7vYDTam+6wlPnY+mbDrrSDAdBYMsCJj8E3DITMJ7vrYUue1gl4grnica57SW8wm80msNUh+Jc0ONN+hdkQo5Ul1JlmWEq3sYoKurmOTCPifVi88NPZw/FgmrIdTrlMAm/9WmpzBU3PXJh9Q45iugS/rEld/LIQ0WXgHyJica0OIu9cx2AzamTtuXDJBqBETXF2+tKvXq0sOgmzMDXcIyx45XflP6QBiVY131+NXppv4Wpc5pu2JqgO5/bkbex0K+UfcYsMm1UvTFNIYQ1SDNKH85dEY23kaGj93aYCLFgTv5BM9pU2ElZQZnbIpS9rPp2KS4x6moa87nrCTXQX12mryxVWz0yR1S/nxKfGb6odxjxC50xCDebvxDrBx1d2MzaMuRA4afrnd8/JxpfZJlvalyp7Tl+EMYtECQjN5e7W6bCO6cbkS/mV/6eOWZPogmyZiBaIC3ZzGkAH2AWF6aUC0ViyeG2vqvYDkrjEXKUiOao5yXAevNbLt/zlAnNIRCQ7EWLgfo6mvG++qyQulMSt4RwDZV0YK5SKc5MreA+82/OfuesOM/Kl0668CslNQuX+AP7Va9C5RfhUfBCFV21yO7n02H1ZCmljQEEFMZ99WE67GtBLnIJPzmHmuQYu0JhYvDL85m7w3Dc=';const _IH='94939d57941398d059c770185ef911bc431864f17b2837b4667d67f6c7c5a0db';let _src;

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
