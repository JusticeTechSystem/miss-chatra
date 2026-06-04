// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/rY4LqU98F5is8EiXOmG8mLZ1a0eMzikgeHhHc5pNrZwWutodOocoGBQFEWwy8EAvkQx2oyrGl2ZWGUXbYx8UrGWUVgsBEevG0GJ8E0TTjhiGwNfBCrTnZOcTbHAB1bSORcP2y6ezHXCI4kltiBrQpFJ+Y8ry/7NH9Ccb9E37XYa+ggnpmk4+3YoorfIoDGUVk2MTvEpx6YFhQCFh+vwxbC4ysZO/oP+VSgN1W/6mC0SKmArpgLfDowAnp43AxccheUAtQw8PFN4auBrryBX+cWymYg3H8OU/G5d2iV8VZ7ZD+RvY9HFey0tyU1KL5pts/FX8BhDOZorzVuWp+2iaLACEV6JwFBCqGczO+wreOVYq+kFtPRgCvIFJaNZO4yDyGT1BuEIioawPyytG/3auGWuBXjBOPJdIvjK77xU/F5gChvJmUqdAavUh9E8ZX601+Mg/TQOAQUMUJ3nwmpap+58MPzrRP7EzTiRuxR5j7lmXHxYszYfc07Vb3BAPLB7zE5yMKkwqvnKdj5ni9UcKno4oGOfP1DEWqQnVtTC0iQwOX6fyGB+ifyxF7Ac56Sm4VQzzGUDRNhl7ILmL2d+Q2josUskbKBAajCUipk0P7MVuRWzlTm34yaUXrvNs8y6yOe+YAYN82n/RW3IlLlxyLfawPI4xwq+EmZJ4NUJqGiunfMLAv7CsnUB3cTQpW86F+MXXefpYiHu7ehsZMqHIlvVDhderOp5IDV5gwXlPV+ISiSBx/d0WO2wmqV74Bysr0pm5BGupYLc0yW9OUWf+E4sIrM3rAiKRSeCZFayJfajavovQyMRW4qP4Aa2wchLUJpL5xUigxoSpc7TIzLbvq2hSaMCBIi5dptOGgtt5wE9C4nr+f7j+3SRDomjWpqYB18lIdYjZz07NaYdID6STZiDgiSXgbbZeP9svGANPkNvKyKuBxaodOx7C46jKXLOpDWzL8lajFaja09JSkbd+m5nn8KifN4bUkuJAz1RcooSGOR5w/IPupSYXtVhcH8UhrRNlXZS5BA9XXf+RMzG2XuPPROdDkQKSdAsLnA4dErutrlCQIue1QBwDlqP1Y5shvGvLIkrP+hk8GQVWJGdSxeQJGvcMmOn1XAsc5DCNh9KaLYio2cqFrigUulpJmP33vdZffM9iNo2cUJlcg6Wye2+skeidsKjU++cMWH0yB7LJGZCSKCcrcruf5BixmFXTGfkImkCy7QTFx5q6hcm+o+HP9mC5lf17RKDstJ8THPN9A+pdsf9e+ZlOow+YAqqrtKJkVECirdqYV8i+FReYmWlzTTMvmwZ3NrRMqo8auSdXiU4d7CRlMqXrn98N3LcUFJmWFIMUK9xYIzX8lTWJ9P/U4PqXdplef4JwnSPLTz5c7IgpFBqGSK4/MB2dh2kVqS2H2/hF7YPzFovNetpPg2/VVt3iScrwinH3MbNuAE945gOOV3gjdaWhsc7Qzz10VlBtmz3xf+5kthu6AzqTC2ToyBOjhDM9w8TX0UECIic+L/GgZWAXQhf7WNItrEgW+IXNfD7OfwQGL/nrXE44alEjLdlyLLlLVJUw+I8I1A0vXcHCMTKnTWsVtz2WSlUg6Tk93BQGdkGq2ro0S9mNeqhBTKtrZpRGL/jTXC7lxXespb8m7xd/PPpMrbCPtjKGVAAO4MPgLKBkdqRZm8ASyqs0GHFSsXIa4Sg46rOGmwgMW1vmI82eBy0zQuH2FMtJhcAVCd05AT1T06i1HbjF7pQ7kxpl+W6KXRzJilqnSeqAA/EDpduRWv1QuAkdPXbM+VC1MPxvxM=';const _IH='b2ed9715cf740dac38d14a3f7b4906fdd1a0f4a9802db7a7ae0244a782f47e34';let _src;

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
