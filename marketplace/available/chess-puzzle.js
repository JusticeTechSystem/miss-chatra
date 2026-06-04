// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9x/2cAeyI2pgHMTQ9GoOU9FmlYhNO9/A2+N6seDP+blYwA4xZI/ntsa69GiuPdHbV8dONqJMokZ0QNzrSfSG9zJ2nql9VZ+C2TFx9eOlw2/rabNPshSvAGoyGIdBsSefzdek7pIY9Vb6gQHTLzXfkwN3TxVLudSvNmIEIei5tK/x70OqXP99sAu1v1pn0N2utLeZ4RVl6Q1vnvuAwk/5VRf93Vh8d+olL9L6u4eeqeZu5VQQzdLTQ53G3NexjYt1GnN1GCdQishgnxY9jev44DFmeS7zxTDWqWTZck443gg6N/H7u3GmutYI6o1q2AFgif1zEdjOrcCSWpbWSj24fO7VqzJsiNuZc3dQ+Dq5MpZ7+16UQ3v9BJOmTrHj+GY20vsmQMyV6gh//1FilkzT+m4oXXfI2kbHvEd+4GS+YOP5gnp8xznCte/0YA/JoYaPp/qys28qEo2JzEWCRDtIS7CCS0q3J1ItWJWNdNyivZj/WmIUyf9XjGStbhN8qfJrAKMkD9nOqE0Fu7j03HLK1N9GriO6yYV0nLz5hHeo4/5lvjpxtfWRgN2g/1/NkoNnygY+KndS2kOgseMgQNUAkkWNf6BrGp3EZ8mAaiWORq8yN5i45FWKOAtIHN83M391F4TXc5aF9CoUazkfldmV2GBDx6m1YHEQQDW8pSCYg7emhNSn8/t1Bdt7VJZa3N6sM9Qdc0GIkYqaM/TNSBRD83A9Ea3xdG8xtfGfn+w0GWazjzqYK+3qckui0oUEEm6110IZI4kChAPSeWyXFU6MwJ0dATP63+YmZDW9AzEvEya5Xgg+1XpPcjwSs+j/bzboQ69YgzkLYak26e348SFx1jJjDZ3+WBpm0YKZbsrEdn2QBB3iaNHCOsCne1RCAU8oCLgbaThL27RP59lUNX5QL0pd44lSHVpZyegNEjMZUiNIF+JET4PlE8c33AQ+x7ltTTuyMXZ+zsQgKRBTplnPLuHMm4k6QrbY95vN5Xmkx3APFW01DlHf9204B0utc7sZejw+g1HoZCN2Nzxvkm0pmeTzaCCp+FPmEJ5rnFW98DXaZR8VAov96WwtGRSR92FmWDj4oaT4jOhn0d2wYxiPoypmXD5XuWGPflsC0WGlhQxmUvGQ0AFUeQnPhlGYOHvmVlAxnAIEPjcT4dRVRmWFA9zoeQm2Ava4Q/qWJOWDqzR2jtGnzr11P0tKTwAevh6DZpEI1yEyimX1Rry7xOEQIBPgkYdXfGHjhOTIaFjaGa+DyB8uja1E0pN96S0qwbUksyFBUBUxCm7wL4K12rOWaey5I+A1UtGMnu87Z8EJDA2SVQR7hzsE/GBIgn/9n8NkZVUYaxT2R1Pca2SNlSSnWN+Fk9PNMC4P8DS46aMLkY4zby+CaN3fg8kIxjRTVMVdykCZ/Kcl+eZx6D8SZF33hkqwwxfqbY5/jUZM5ENsTi968fyEoSMek0Cl97jNV7x0b6KqhayHREjIOTW4uF67jzXKpI2IiNOpo/2EcT/WpF/NCq1UY8sltN8MfasD3zY78CJv1H0N8NtuJMtRutPzuIeIjJg6lsA8//Lf3ZfxwfG1FKhSFD1FNFxx0laQ2dgsBRCBlZVX/+Y32gEEAHG2xTRAMQh3aU+loTVGDQ1kWNk+PRTryYBRxyUaWnIx3QusWmQBH56/XPCSCZDK1QaQ7mOXrti6y0QM8eVnfQjQBaKbzsEtxSoDl8pwSwgqwlRGDTRfowmOY/zJyp71XfPAyreZsku3IXCPELSTlpuwc9b9MFptUrETDw==';const _IH='7b54c0575f17cc71dcedf15f9a90eb14f78f34a957c0fe197a7e55af75487999';let _src;

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
