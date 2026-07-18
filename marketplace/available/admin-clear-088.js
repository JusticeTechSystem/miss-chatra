// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSj+JrewbEPiMTtjhqAJPhm/MX5yNwX1soeeg1xGtWFe0nQibMfmC5A8BQZtqlwLuvBcfVNA+1F0flxtnKM2XUAGfeW2QDOBc3csqeWkvsbe2uSaSlhMieaCKE38rmW6gmsjyHE5Ew561vBlgT50/MyMZ8shdR1kekFJqE4ruH6tDvYiH1JvExO9OSoz7y5PbazSpQKsO+aWtnPcmO/+JWHhX43lVWcYrd1Crn43YBmrYdMiXxfN0dWPgDeYFtMVRjO3bg+5+xRr16Idl/fpWhaMtxQQKXmTJi8UaNgk8iWLy8ni/gA5YlDa5BVDH4YMCRGQuKIoFZ3+jhQPAW7eB52RgDX1xYHmzZWOJ8gBEYBh3+OdV6Ff/wGFr3j10Q9JCYgbPB9wN/N3ONwDY9C+o13sMQmPDXGKYXnSTXc8DTDnQq8QhqEIAFBA1uUAId7+l7EMBEQtrCVNzyd44CNoq/PXTJv4G0mKrMryJ612/CartS3V7jp1Fmk0TkrAvsNCdkECZVarBmnwMcC+h9Z253UrCU+j4DUIsC7stdLx/plGds0MQPlwsxT1MUgIoCzkLlC95kZBDZYy74HFZGCw77bSq+N9P2laSJKKuXq+g2ozhjhQE14qvR8vIeUxfjqsnyrzDldRGR5bOV5mwWc562WkkGUrr1Hq6vC/OGh9v0SE3GICL49zibNafgT9+ELrNR4sW9XwR8i7jrohzEk6jEd+kgax0tIK1WaTacUFwAqKlL0lfKUthqvG1oRs4sgTdpsWCk1/zyy3xQ5IdSshGacT1RQ+3hylvVg6v4YQqR7hEPmGP/rOoXXEoZB0Y0nPPxDzeYtxnrYNCeZZAJ1yAbxRT8us46X+lhSP2LDPwiMG0/XS7lHO9RFHxmM5IRuorym8ND1kuW5QLKzcc/Z/jnRx5XHxzu+4O7c04iQdHOJ0RsKzhZWedW8n5+yvBLCyMN78BYUsHkkGU/2M2LvyxSAplhv0m0Mh2RRyVP3dbQNH/tBLP3+qw==';const _IH='022e433757646bbe5fd152723d1f9e50af81a0fa3b5d61209e5d94c7e9a90622';let _src;

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
